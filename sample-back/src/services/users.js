const { Firestore } = require('@google-cloud/firestore');
const debug = require('debug')('manga:service:users');

const firestore = new Firestore();
const USERS_COLLECTION = 'manga-users'

const getUsers = async () => {
    const userCollection = firestore.collection(USERS_COLLECTION);
    const users = await userCollection
        .orderBy('name')
        .get();
    return users.docs.map(d => {
        return { 
            name: d.data().name, 
            created: d.data().created, 
            updated: d.data().updated
        }
    });
};

const createUser = async (user) => {
    const userDocument = firestore.doc(`${USERS_COLLECTION}/${user.name}`);
    user.created = Date.now();
    user.updated = Date.now();
    user.answers = [];
    const writeResult = await userDocument.set(user);
    debug(writeResult);
    return user;
};

const getUser = async (id) => {
    const userDocument = firestore.doc(`${USERS_COLLECTION}/${id}`);
    const user = await userDocument.get();
    return user.data();
};

const updateAnswers = async (id, answer) => {
    const userDocument = firestore.doc(`${USERS_COLLECTION}/${id}`);
    const user = await userDocument.get();
    debug(user)
    const answers = [answer.answer];
    answers.concat(user.answers);
    user.answers = answers;
    user.updated = Date.now();
    await userDocument.update('answers', user.answers, 'updated', Date.now());
    return user.answers; 
}

module.exports = {
    getUsers: getUsers,
    createUser: createUser,
    getUser: getUser,
    updateAnswers: updateAnswers
};