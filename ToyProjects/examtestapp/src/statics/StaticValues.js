// URL
export const STATIC_HOME_URL = '/'
export const STATIC_EXAM_URL = STATIC_HOME_URL + 'exam'
export const STATIC_PAST_QUESTION_URL = STATIC_EXAM_URL + '/pastQuestion'
export const STATIC_SAVED_QUESTION_URL = STATIC_EXAM_URL + '/savedQuestion'
export const STATIC_EXPECTATION_QUESTION_URL = STATIC_EXAM_URL + '/expectationQuestion'

// API
//export const STATIC_SERVER_DOMAIN = 'http://192.168.0.2:8080'   // For test
export const STATIC_SERVER_DOMAIN = 'http://192.168.0.11:18080/examtest' // For deploy
export const STATIC_BASE_API_DOMAIN = STATIC_SERVER_DOMAIN + '/api/v1'
export const STATIC_EXAMS_API = STATIC_BASE_API_DOMAIN + '/exams'
export const STATIC_GET_SAVED_EXAM_API = STATIC_EXAMS_API + '?save_status=true'
export const STATIC_GET_PAST_EXAM_API = STATIC_EXAMS_API + '?type=past'
export const STATIC_GET_EXPECTATION_EXAM_API = STATIC_EXAMS_API + '?type=expectation'


// Strings
export const STATIC_SAVE_EXAM_CONFIRM_TEXT = '저장 하시겠습니까?'
export const STATIC_DELETE_EXAM_CONFIRM_TEXT = '삭제 하시겠습니까?'
