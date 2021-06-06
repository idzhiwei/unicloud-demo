<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="btn-list">
			<button type="default" @click="create">增</button>
			<button type="default" @click="del">删</button>
			<button type="default" @click="update">改</button>
			<button type="default" @click="query">查</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			create(){
				console.log('create');
			},
			del(){
				console.log("del");
			},
			update(){
				console.log("update");
			},
			query() {
				console.log('query')
				uniCloud.callFunction({
					name: "user"
				}).then(res => {
					console.log(res.result.data)
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
