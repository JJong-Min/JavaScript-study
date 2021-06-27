// 1부터 n까지의 합을 구하는 함수

function n_sum(n) {
    let sum = 0
    for (let i = 1; i<=n; i++) {
        sum += i
    }

    return sum
}

console.log(n_sum(100));

// 미세먼지의 값이 40미만인 구 이름과 값을 출력
let fine_dust_list = [{"MSRSTE_NM": "동작구", "IDEX_MVL": 43}, {"MSRSTE_NM": "수성구", "IDEX_MVL": 39}, {"MSRSTE_NM": "양평구", "IDEX_MVL": 23}]

function show_gu_and_value(n) {
    for (let i=0;i<fine_dust_list.length;i++) {
        let gu_name = fine_dust_list[i]["MSRSTE_NM"]
        let gu_fine_dust_value = fine_dust_list[i]["IDEX_MVL"]
        if (gu_fine_dust_value < n) {
            console.log(gu_name, gu_fine_dust_value)
        }
    }
}
show_gu_and_value(50)



// 자동차(parkingCarCnt)가 5개 이하인 주차장의 이름 출력
function parking_name(n) {
    let Car_list = [{"park_name":"나위", "parking_car_num":32}, {"park_name":"네므", "parking_car_num":3}, {"park_name":"므에", "parking_car_num":13}]

    for(let i = 0; i<Car_list.length; i++) {
        if (Car_list[i]["parking_car_num"] <=n) {
            let park_name = Car_list[i]["park_name"]
            let car_num = Car_list[i]["parking_car_num"]
            console.log(park_name, car_num)    
        }
    }
}

parking_name(5)