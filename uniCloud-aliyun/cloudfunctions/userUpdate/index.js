'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const collection = db.collection('user')
	const {
		id, name, age, school
	} = event
	const res = await collection.doc(id).update({
		name, age, school
	})
	//返回数据给客户端
	return {
		result: 0,
		message: "update success",
		data: res
	}
};
