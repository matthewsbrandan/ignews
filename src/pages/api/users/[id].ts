import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Mateus' },
    { id: 2, name: 'Isabella' },
    { id: 3, name: 'Felipe' },
    { id: 4, name: 'Beatriz' }
  ];

  return response.json(users);
}