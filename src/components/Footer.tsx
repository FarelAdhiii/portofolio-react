function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>&copy; {year} Portfolio Farel. Seluruh hak cipta dilindungi.</p>
        </footer>
    );
}

export default Footer;