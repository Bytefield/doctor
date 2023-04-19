import db from './database.js';

async function create(type, data) {
  const object = { ...data, _id: db.generateObjectId() };
  await db().write(() => {
    db().create(type, object);
  });
  return object._id;
}

async function read(type, query = {}) {
  const objects = db().objects(type).filtered(query);
  return objects.map((object) => ({ ...object }));
}

async function update(type, id, data) {
  const object = db().objectForPrimaryKey(type, id);
  if (!object) throw new Error(`Object of type '${type}' with id '${id}' not found`);
  await db().write(() => {
    Object.keys(data).forEach((key) => {
      object[key] = data[key];
    });
  });
}

async function del(type, id) {
  const object = db().objectForPrimaryKey(type, id);
  if (!object) throw new Error(`Object of type '${type}' with id '${id}' not found`);
  await db().write(() => {
    db().delete(object);
  });
}

export default { create, read, update, del };