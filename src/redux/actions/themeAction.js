//Logined Check
export const handleThemeChange = () => (dispatch) => {
  try {
    //dispatch the methos of check login or not
    dispatch({
      type: 'ChangeTheme'
    })
  } catch (error) {
    console.log(error)
  }
}
