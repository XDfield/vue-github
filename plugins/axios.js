export default function({ $axios, redirect }) {
  $axios.setHeader('Accept', 'application/vnd.github.v3+json')
  $axios.setHeader('Content-Type', 'application/json')
}
