// Write your solution in this file!

let driver = {}
function updateDriverWithKeyAndValue(driver, key, value){
    return { ...driver, ...{ [key]: value } }

}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    
    driver[key] = value

    return driver

}
function deleteFromDriverByKey(driver, key){
    let temp = {...driver}
    delete temp[key]
    return temp
}
function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}