import { PaletteMode } from '@mui/material'

const palette = (mode: PaletteMode) => ({
    mode,
    ...(mode === 'light'
        ? {
            primary: {
                main: '#0156FF',
            },
            secondary: {
                main: '#19857b',
            },
            error: {
                main: '#e64a19',
            },
            background: {
                default: '#F6F7F9',
            },
            text: {
                primary: '#303031',
            },
        }
        : {
            primary: {
                main: '#BC191D',
            },
            secondary: {
                main: '#19857b',
            },
            error: {
                main: '#e64a19',
            },
            background: {
                default: '#3C3C3D',
            },
            text: {
                primary: '#FFF',
            },
        }),
})
export default palette