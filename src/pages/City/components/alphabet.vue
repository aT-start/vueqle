<template>
	<ul class="list">
		<li class="item" 
			v-for="key in letters"
			:key="key"
			@click="handleLetterClick"
			@touchstart="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd"
			:ref="key"
		>{{key}}</li>		
	</ul>
</template>
<script>
	export default{
		name:"Alphabet",
		data(){
			return {
				touchStatus:false,
				letterss:[],
				startY:0,
				timer:null
			}
		},
		// 由于数据(cities原来是空对象)更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
		updated(){
			this.startY=this.$refs["A"][0].offsetTop;
		},
		computed:{
			letters(){
				const letters=[];
				// const lettt=[1,2,3];
				for(var item in this.cities){
					letters.push(item);
				}
				// console.log(this.letterss);
				return letters;
			}
		},
		created(){
			// this.letters();
			// console.log(this.cities);
			// console.log(this.letters()); 
		},
		props:{
			cities:Object
		},
		methods:{
			handleLetterClick(e){
				this.$emit('change',e.target.innerHTML);
				// console.log(e.target.innerHTML);
			},
			handleTouchStart () {
				this.touchStatus=true;
			},
			handleTouchMove (e){
				if(this.touchStatus){
					// console.log(this.timer);
					if(this.timer){
						clearTimeout(this.timer);
					}
					// console.log(this.timer);
					// 函数节流，this.timer都为数字、从11开始。
					this.timer=setTimeout(()=>{
						// console.log(startY);
						const touchY=e.touches[0].clientY;
						const letterY=touchY-75;
						const index=Math.floor((letterY-this.startY)/20);
						if(index>=0&&index<this.letters.length){
							this.$emit('change',this.letters[index]);
						}
						// console.log(this.timer);
					},8);
					

				}
			},
			handleTouchEnd () {
				this.touchStatus=false;

			}
			// ,
			// letters(){
			// 	const lettersss=[];
			// 	for(var item in this.cities){
			// 		lettersss.push(item);
			// 	}
			// 	// console.log(this.letterss);
			// 	return lettersss;
			// }
		}
	}
</script>
<style lang="scss" scoped>
	// @import '../../../assets/scss/variables.scss';
	@import '~assets/scss/variables';
	.list{
		position:absolute;
		top:150px;
		right:0;
		bottom:0;
		width:30px;
		display:flex;
		flex-direction: column;
		justify-content: center;
		// z-index: -1;
		.item{
			line-height: 40px;
			color:$bgcolor;
		}

	}
</style>