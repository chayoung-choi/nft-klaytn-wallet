import moment from 'moment'
import 'moment/locale/ko'
export const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
  if (!value) return value
  return moment(value || '000').format('LLL');
}
