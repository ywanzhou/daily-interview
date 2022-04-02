/**
 * @description: 获取有效样式
 * @param {*} element DOM元素
 * @param {string} styleName 样式名称
 * @returns {string} 具体样式的值
 */
export const getStyle = (element, styleName) => {
  if (!element || !styleName) {
    return null
  }
  const computed = document.defaultView.getComputedStyle(element, null)
  return computed ? computed[styleName] : null
}
