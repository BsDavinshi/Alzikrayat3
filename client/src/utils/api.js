// Thin fetch wrapper for Project 3 (Basic Auth — sends x-user-id header when signed in)

function getStoredUserId() {
  try {
    const raw = localStorage.getItem('alzikrayat_user');
    const user = raw ? JSON.parse(raw) : null;
    return user ? user._id : null;
  } catch {
    return null;
  }
}

export async function apiRequest(path, options = {}) {
  const headers = { ...(options.headers || {}) };
  const userId = getStoredUserId();

  if (userId) {
    headers['x-user-id'] = userId;
  }

  const isFormData = options.body instanceof FormData;
  if (!isFormData && options.body && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  const res = await fetch(`/api${path}`, {
    ...options,
    headers,
    body: !isFormData && options.body && typeof options.body !== 'string'
      ? JSON.stringify(options.body)
      : options.body
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.message || 'Request failed');
  }
  return data;
}
