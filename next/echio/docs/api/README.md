# API DOCS

## Index

- [ /api/user/login ](#login)
- [ /api/user/register ](#register)
- [ /api/user/me ](#me)
- [ /api/campaign/create](#create)
- [ /api/campaign/list](#list)

## user

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

## campaign

### create

```
POST : /api/campaign/create
```

Create a campaign.

<details>

#### Body Parameters (json)

| Parameter           | Type                           | Description                    | Default |
| ------------------- | ------------------------------ | ------------------------------ | ------- |
| name                | string                         | campaign name                  | -       |
| description         | string                         | campaign description           | -       |
| image               | string                         | campaign image                 | -       |
| product_description | string                         | product description            | -       |
| product_media       | comma seperated list of string | product media (photo or video) | ''      |
| campaign_type       | NORMAL or PAID or BARTER       | campaign payment type          | NORMAL  |
| nsfw                | boolean                        | is campaign nsfw               | false   |

#### Response Codes

| Code | Meaning                                       | Data              |
| ---- | --------------------------------------------- | ----------------- |
| 201  | Campaign created successfully                 | message, campaign |
| 400  | Something went wrong (probably existing user) | message, error?   |
| 405  | Method not supported                          | message           |

</details>

### list

```
GET : /api/campaign/list
```

List campaigns for the uesr.

<details>

#### Query Parameters

(none)

#### Response Codes

| Code | Meaning                           | Data      |
| ---- | --------------------------------- | --------- |
| 200  | Responding with list of campaigns | campaigns |
| 405  | Method not supported              | message   |

</details>
