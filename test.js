/* Như các bạn thấy, formValues là một mảng có thể chứa nhiều objects. 
Mỗi object chứa 2 keys là field và value.
Từ array formValues đã cho, hãy trả về một object có các keys tương ứng
với các fields của các objects nằm trong array formValues.
*/
function getRequestBodyFromValues(formValues) {
    var object = {};
    for (var i = 0; i < formValues.length; i++) {
        object[formValues[i]['field']] = formValues[i]['value']
    }
    console.log(object)
}

getRequestBodyFromValues([
    { field: 'name', value: 'Sơn Đặng' },
    { field: 'age', value: 18 },
    { field: 'address', value: 'Hà Nội' },
])
