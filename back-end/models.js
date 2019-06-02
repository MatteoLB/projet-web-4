const knex = require('knex')(require('./knexfile').development);
const crypto = require("crypto");


function getUser(mail) {
    return knex("users").where({mail:mail})
}

function randomString () {
  return crypto.randomBytes(4).toString('hex')
}

function saltHashPassword ({ password,
                             salt = randomString()
                           }) 
{
  const hash = crypto
    .createHmac('sha512', salt)
    .update(password)
  return {
    salt,
    hash: hash.digest('hex')
  }
}

/*
  `id` int(11) NOT NULL,
  `prenom` varchar(100) DEFAULT NULL,
  `nom` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `tel` varchar(100) DEFAULT NULL,
  `mdp` varchar(100) DEFAULT NULL
 */
function createUser(data_JSON) {
    let data = JSON.parse(data_JSON);
    console.log(`Add user ${data.mail}`);
    const { salt, hash } = saltHashPassword({password:data.password}); // hache le mdp de l'user et génère un salt
    data.password = hash;
    data.salt = salt;
    let user_data = {
        mail:data.mail,
        password:data.password,
        salt:data.salt,
        avatar:data.avatar,
        languages:data.languages
    };

    console.log('user data ' + user_data);
    return knex('users').insert(user_data, 'id');
}


function createPlayer(data_JSON) {
    let data = JSON.parse(data_JSON);
    console.log(`Add player ${data.username}`);

    let user_data = {
        users_id: data.id,
        game: data.game,
        platform: data.platform,
        username: data.username,
        battletag: data.battletag,
        role: data.role,
        searching: '0'
    };

    console.log('player data ' + user_data);
    return knex('players').insert(user_data, 'id');
}


function logUser(data)
{
    console.log('Login ' + data.mail);

    return knex('users').where({ mail:data.mail }).then(([users]) => {

        if (!users) 
        {
            console.log("user doesn't exist");
            return { success: false };
        }

        const { hash } = saltHashPassword({   // récupère le hash du mdp entré par l'utilisateur, avec le salt associé à cet user en bdd
          password: data.password,
          salt: users.salt
        })
        

        return { success: hash === users.password, id: users.id } // renvoie vrai si le hash est égal au mdp, faux si ce n'est pas le cas
      })
}


function createPublication(data) {

}


function createComment(data) {

}


function listUsers(data) {
    return knex("users").where(data);
}

module.exports = {
    getUser,
    createUser,
    listUsers,
    logUser,
    createPlayer
};