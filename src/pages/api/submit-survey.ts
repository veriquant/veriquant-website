import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Get the access key from environment variable (server-side only)
    const accessKey = import.meta.env.WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Web3Forms access key not configured' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Add the access key to the data
    const formData = {
      ...data,
      access_key: accessKey
    };
    
    // Submit to Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    return new Response(JSON.stringify(result), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Server error occurred' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
