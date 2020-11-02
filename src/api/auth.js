import stringify  from 'qs-stringify'

const url = 'http://testapi.marit.expert:3003'

export const login = async (body = null, headers = {}) => {
  try {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';

    const response = await fetch(`${url}/auth`, { method: 'POST', body: stringify(body), headers });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
console.log(data);
    return data;
  } catch (error) {
      throw error;
  }
}

export const logout =  async () => {
  try {
    await fetch(`${url}/logout`, { method: 'GET' });
  } catch (error) {
    throw error;
  }
}

export const check = async () => {
  try {
    const response = await fetch(`${url}/check`, { method:'GET' });
    const data = await response.json();
console.log(data)
    return data;
  } catch (error) {
    throw error;
  }
}

