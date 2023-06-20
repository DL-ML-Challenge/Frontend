const persianRegex = /[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF\u200C\u200F]/

export function containsPersian (text) {
  return persianRegex.test(text)
}
