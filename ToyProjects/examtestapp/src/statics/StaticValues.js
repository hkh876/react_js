// URL
export const STATIC_HOME_URL = '/'
export const STATIC_EXAM_URL = STATIC_HOME_URL + 'exam'
export const STATIC_SAVED_EXAM_URL = STATIC_EXAM_URL + '/saved'
export const STATIC_SAVED_BARISTA2_QUESTION_URL = STATIC_SAVED_EXAM_URL + '/barista2'
export const STATIC_PAST_QUESTION_URL = STATIC_EXAM_URL + '/pastQuestion'
export const STATIC_SAVED_QUESTION_URL = STATIC_EXAM_URL + '/savedQuestion'
export const STATIC_EXPECTATION_QUESTION_URL = STATIC_EXAM_URL + '/expectationQuestion'
export const STATIC_BARISTA2_QUESTION_URL = STATIC_EXAM_URL + '/barista2'

// API
//export const STATIC_SERVER_DOMAIN = 'http://localhost:8080'   // For test
export const STATIC_SERVER_DOMAIN = 'http://192.168.0.7:28080' // For deploy
export const STATIC_BASE_API_DOMAIN = STATIC_SERVER_DOMAIN + '/api/v1'
export const STATIC_EXAMS_API = STATIC_BASE_API_DOMAIN + '/exams'
export const STATIC_GET_SAVED_EXAM_API = STATIC_EXAMS_API + '?save_status=true'
export const STATIC_GET_PAST_EXAM_API = STATIC_EXAMS_API + '?type=past'
export const STATIC_GET_EXPECTATION_EXAM_API = STATIC_EXAMS_API + '?type=expectation'

export const STATIC_QUESTION_API = STATIC_BASE_API_DOMAIN + "/question"
export const STATIC_GET_BARISTA2_EXAM_LIST_API = STATIC_QUESTION_API + "/list?type=barista2"
export const STATIC_GET_BARISTA2_SAVED_EXAM_LIST_API = STATIC_QUESTION_API + "/list?type=barista2&saved=true"
export const STATIC_GET_BARISTA2_EXAM_API = STATIC_QUESTION_API + "/barista2"
export const STATIC_PUT_SAVE_EXAM_API = STATIC_QUESTION_API + "/update"

// Strings
export const STATIC_SAVE_EXAM_CONFIRM_TEXT = '저장 하시겠습니까?'
export const STATIC_DELETE_EXAM_CONFIRM_TEXT = '삭제 하시겠습니까?'
