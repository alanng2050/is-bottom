export const isBottom = ({
  cb,
  threshold = 50,
}: {
  cb?: () => void
  threshold?: number
}) => {
  const onscroll = () => {
    const scrolledTo = window.scrollY + window.innerHeight
    const isReachBottom = document.body.scrollHeight - threshold <= scrolledTo
    if (isReachBottom) cb?.()
  }
  window.addEventListener('scroll', onscroll)
  return () => {
    window.removeEventListener('scroll', onscroll)
  }
}
