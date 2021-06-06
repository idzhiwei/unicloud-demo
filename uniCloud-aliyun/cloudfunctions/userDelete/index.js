'use strict';
const db = uniCloud.database()

exports.main = async (event, context) => {
	const collection = db.collection('user')
	const _id = event.id
	const res = await collection.doc(_id).remove()
	return {
		result: 0,
		message: "delete success",
		data: res
	}
};
