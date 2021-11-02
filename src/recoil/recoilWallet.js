import {atom, DefaultValue, selector} from "recoil"

export const localStorageEffect = key => ({setSelf, onSet}) => {
  const savedValue = localStorage.getItem(key)

  if (savedValue !== null) {
    setSelf(JSON.parse(savedValue))
  }
  onSet(newValue => {
    if (newValue instanceof DefaultValue) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(newValue))
    }
  })
}

export const walletState = atom({
  key: 'walletState',
  default: [],
  effects_UNSTABLE: [localStorageEffect('userWallet')]
})
