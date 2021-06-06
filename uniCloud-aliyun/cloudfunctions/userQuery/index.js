'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const collection = db.collection('user')
	const res = await collection.get()
	//返回数据给客户端
	return {
		result: 0,
		message: "query success",
		data: res.data || []
	}
};
