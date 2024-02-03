'use client';
import React from 'react';
import { useRouter } from 'next/navigation'
import { ToastContext } from '../../../../components/ToastProvider';

function ContactPage() {
  const router = useRouter()
  const { createToast } = React.useContext(ToastContext)
  
  return (
    <main>
      <form onSubmit={(event) => {
        event.preventDefault();
        router.push('/exercises/02-flash-messages')
        createToast('Your message was received.\nWel\'ll get back to you shortly', 'success')
      }}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
