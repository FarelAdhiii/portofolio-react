import React, { useState } from 'react';

type Form = {
        nama: string;
        pesan: string;
    };
    type Status = {
        type: "success" | "error";
        text: string;
    };

function Contact() {
    const [form, setForm] = useState<Form>({ nama: "", pesan: ""});
    const [status, setStatus] = useState<Status | null>(null);

    function handleChange(c: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({ ...form, [c.target.name]: c.target.value });
    }

    function handleSubmit(t: React.SubmitEvent<HTMLFormElement>) {
        t.preventDefault();
        if (!form.nama.trim() || !form.pesan.trim()) {
            setStatus({ type: "error", text: "Nama dan pesan wajib diisi."});
            return;
        }
        setStatus({
            type: "success",
            text: "Terima kasih, " + form.nama + "! Pesan kamu sudah terkirim.",
        });
        setForm({ nama: "", pesan: ""});
    }
    return (
        <section className='contact'>
            <h2>Hubungi Saya</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nama" value={form.nama} onChange={handleChange} placeholder='Nama Lengkap' />
                <textarea name="pesan" value={form.pesan} onChange={handleChange} placeholder='Pesan'></textarea>
                <button type='submit'>Kirim</button>
            </form>
            {status && <p className={status.type}>{status.text}</p>}
        </section>
    );
}

export default Contact;