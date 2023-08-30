import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useCommonsStore = create(
    persist(
        (set) => ({
            apiKey: "",
            filesList: [],

            setApiKey: (apiKey) => set((state) => ({
                ...state,
                apiKey: apiKey
            })),

            setFilesList: (filesList) => set((state) => ({
                ...state,
                filesList: filesList
            })),

            addNewFile: (file) => set((state) => ({
                ...state,
                filesList: [...state.filesList, file]
            }))
        }),
        {
            name: "commons-store",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)

export default useCommonsStore