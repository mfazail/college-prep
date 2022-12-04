<script setup lang="ts">
const props = defineProps<{
	type?: 'danger' | 'info' | 'warning'
}>()
const getType = computed(() => {
	let _t = 'bg-blue-500 text-blue-200'
	switch (props.type) {
		case 'danger':
			_t = 'bg-red-500 text-red-200';
			break;
		case 'warning':
			_t = 'bg-yellow-500 text-yellow-200';
			break;
		default:
			_t = 'bg-blue-500 text-blue-200'
			break;
	}
	return _t
})
</script>

<template>
	<div :class="[getType,'px-3 py-px max-w-min']">
		<ContentSlot :use="$slots.default" unwrap="p" />
	</div>
</template>