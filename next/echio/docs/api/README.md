# API DOCS

## User Authentication

`next-auth` package is used to provide easy authentication.

To check if a user is logged in, use the `getServerSession` function like such

```javascript
export default async function Page(props) {
  const session = await getServerSession()
  if (!session || session.status === "unauthenticated") {
    return <div>Unauthenticated</div>
  }
  // ...
}
```

refer the docs : https://next-auth.js.org/configuration/nextjs#getserversession

---

For creating the login / register page use the following api routes:

#### OAuth

- Google: `/api/auth/signin/google`
- Apple: TODO
- Outlook: TODO

#### Credentials

Create a csrf token first and then use the api route below

```
POST : /api/auth/callback/credentials (for login)
```

refer docs for getCrsfToken() : https://next-auth.js.org/getting-started/client#getcsrftoken

<details>

#### Body Parameters

| Parameter | Type       | Description                     |
| --------- | ---------- | ------------------------------- |
| csrfToken | csrf token | csrf token using getCsrfToken() |
| email     | string     | email of existing user          |
| password  | string     | password of existing user       |

</details>

<br>

```
POST : /api/user/register (for register)
```

<details>

#### Body Parameters

| Parameter | Type       | Description                     |
| --------- | ---------- | ------------------------------- |
| csrfToken | csrf token | csrf token using getCsrfToken() |
| email     | string     | email of new user               |
| password  | string     | password of new user            |
| name      | string     | name of new user                |

TODO: more details of user

</details>

### me

Get data for currently logged in user. (not recommended, use getSession() as shown above)

```
GET : /api/auth/session
```

## campaign

### get campaigns

```js
await getCampaigns(user_id)
```

| Parameter | Type   | Description                   |
| --------- | ------ | ----------------------------- |
| user_id   | string | user id ( `session.user.id` ) |

### Create campaign.

```
POST : /api/campaign/create
```

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

| Code | Meaning                                           | Data              |
| ---- | ------------------------------------------------- | ----------------- |
| 201  | Campaign created successfully                     | message, campaign |
| 400  | Something went wrong (probably existing campaign) | message, error?   |
| 405  | Method not supported                              | message           |

</details>

### add influencer to ongoing list

```
POST : /api/campaign/add-influencer
```

<details>

#### Body Parameters (json)

| Parameter     | Type   | Description |
| ------------- | ------ | ----------- |
| campaign_id   | string | campaign id |
| influencer_id | string | campaign_id |

#### Response Codes

| Code | Meaning                       | Data              |
| ---- | ----------------------------- | ----------------- |
| 201  | Influencer added successfully | message, campaign |
| 400  | Something went wrong          | message, error?   |
| 405  | Method not supported          | message           |

</details>


### add influencer to shortlisted list

```
POST : /api/campaign/shortlist-influencer
```

<details>

#### Body Parameters (json)

| Parameter     | Type   | Description |
| ------------- | ------ | ----------- |
| campaign_id   | string | campaign id |
| influencer_id | string | campaign_id |

#### Response Codes

| Code | Meaning                       | Data              |
| ---- | ----------------------------- | ----------------- |
| 201  | Influencer added successfully | message, campaign |
| 400  | Something went wrong          | message, error?   |
| 405  | Method not supported          | message           |

</details>
