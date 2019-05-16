export default {
  bind: (element, binding) => {
    // Allows us to pass in different pixel values for each offset position
    // in an object directly attached to v-pin on PartSelector
    // ex: { top: '5px', left: '10px' }
    Object.keys(binding.value).forEach(position => {
      element.style[position] = binding.value[position]
    })
    element.style.position = 'absolute'
  }
}
