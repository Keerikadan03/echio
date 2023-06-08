# API DOCS

## Index

- [ /api/user/login ](#login)
- [ /api/user/register ](#register)
- [ /api/user/me ](#me)

## user

### login

```
POST : /api/user/login
```

Sets the cookie for user authentication.

<details>

#### Body Parameters

| Parameter | Type   | Description   |
| --------- | ------ | ------------- |
| email     | string | user email    |
| password  | string | user password |

#### Response

| Code | Meaning                        | Data    |
| ---- | ------------------------------ | ------- |
| 200  | Login success                  | message |
| 404  | Email and password don't match | message |
| 405  | Method not supported           | message |

</details>

### register

```
POST : /api/user/register
```

Register user only. Use login afterwards to set user cookie.

<details>

#### Body Parameters (json)

| Parameter | Type   | Description    |
| --------- | ------ | -------------- |
| name      | string | user full name |
| email     | string | user email     |
| password  | string | user password  |

#### Response Codes

| Code | Meaning                                       | Data            |
| ---- | --------------------------------------------- | --------------- |
| 200  | User created successfully                     | message         |
| 400  | Something went wrong (probably existing user) | message, error? |
| 405  | Method not supported                          | message         |

</details>

### me

```
GET : /api/user/me
```

Get data for currently logged in user.

<details>

#### Query Parameters

(none)

#### Response Codes

| Code | Meaning                   | Data    |
| ---- | ------------------------- | ------- |
| 200  | Responding with user info | user    |
| 401  | Unauthenticated           | message |
| 405  | Method not supported      | message |

</details>
