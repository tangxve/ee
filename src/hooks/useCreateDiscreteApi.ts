import { computed, ref } from 'vue'
import type { ConfigProviderProps } from 'naive-ui'
import { createDiscreteApi, darkTheme, lightTheme } from 'naive-ui'

const themeRef = ref<'light' | 'dark'>('light')
const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
  theme: themeRef.value === 'light' ? lightTheme : darkTheme,
}))

const { message, notification, dialog, loadingBar } = createDiscreteApi(
  ['message', 'dialog', 'notification', 'loadingBar'],
  {
    configProviderProps: configProviderPropsRef,
  },
)

export const useMessage = () => {
  return message
}
