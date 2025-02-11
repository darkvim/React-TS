import { UrlToFileProps } from '../type/UrlToFileProps'

export const urlToFile = async ({
  url,
  fileName,
  mimeType,
}: UrlToFileProps): Promise<File> => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Ошибка загрузки ${url}: ${response.statusText}`)
  }
  const blob = await response.blob()
  return new File([blob], fileName, { type: mimeType })
}
