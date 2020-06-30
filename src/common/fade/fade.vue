<template>
	<div>
		<transition name="fade">
			<slot></slot>
		</transition>
	</div>
</template>
<script>
	export default{
		name:"fade",
		data () {
			return {
				 
			}
		}
	}

</script>
<style lang="scss" scoped>
	.fade-enter-active,.fade-leave-active{
		transition:opacity .5s;
	}
	.fade-enter,.fade-leave-to{
		opacity:0;
	}

</style>