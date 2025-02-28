import {computed} from "vue";
import {useThemeStore} from '../store/useThemeStore.ts'

export function getDarkModeStatus():boolean{

    const theme = useThemeStore()
    let isDarkMode = computed<boolean>(() => {return theme.getTheme })

    return isDarkMode.value
}
