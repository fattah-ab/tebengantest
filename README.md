# tebengantest
```
Diketahui sebuah database bernama "tebengan"  yang berisi 2 table yakni "user" dan "ride"
* table user bersisikan kolom
  id: serial (PK)
  first_name: varchar(50)
  last_name: varchar(50)
```
```
* table ride berisikan kolom
   id: serial (PK)
   from_city_name: varchar(100)
   to_city_name: varchar(100)
   user_id: integer
```
```
relasi antara kedua table diatas:
* user has many ride
```
```
SQL script untuk database diatas 
https://gist.github.com/prayuditb/d4d65a2b43e71a81a7df2d4a697ee5eb#file-gistfile1-txt
```
```
Dibutuhkan endpoint:
* http://localhost:3000/api/user
  mengembalikan response json array user 
  
  [{
      "id": 1,
      "first_name": "jaka",
      "last_name": "tingkir"
   }, {
      "id": 2,
      "first_name": "tengku",
      "last_name": "umar"
  }]

* http://localhost:3001/api/user?relation=rides
   mengembalikan response json array user beserta ride

[{
      "id": 1,
      "first_name": "jaka",
      "last_name": "tingkir",
      "rides": []
   }, {
      "id": 2,
      "first_name": "tengku",
      "last_name": "umar",
      "rides": [{
         "id": 1,
         "from_city_name": "Bandung",
         "to_city_name": "Jakarta"
          "user_id": 2
      }]
  }]
  ```