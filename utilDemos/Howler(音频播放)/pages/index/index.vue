<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	import {
		Howl,
		Howler
	} from 'howler';
	import wx from '@/common/wx-js-sdk.js';
	export default {
		data() {
			return {
				title: 'Hello',
				musicUrl: 'https://youbaoquan.oss-cn-shenzhen.aliyuncs.com/monster_music1602127424856',
				musicAudio: null
			}
		},
		onLoad() {
			this.musicAudio = new Howl({
				src: ['https://youbaoquan.oss-cn-shenzhen.aliyuncs.com/monster_music1602127424856'],
				html5: true, // 设置为true 页面将使用原生video 标签渲染 不会导致资源跨域的情况
				autoplay: true,
				loop: true,
				volume: 0.5,
				onend: function() {
					console.log('Finished!');
				}
			})
			console.log(this.musicAudio);
			let that = this
			wx.config({
				// 配置信息, 即使不正确也能使用 wx.ready,需要注意若页面有H5分享时，不要覆盖到wx.config导致分享失败
				debug: false,
				appId: '',
				timestamp: 1,
				nonceStr: '',
				signature: '',
				jsApiList: []
			});
			wx.ready(function() {
				that.musicAudio.play();
			});
		},
		methods: {

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
