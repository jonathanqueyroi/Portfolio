import './globals.css';

export const metadata = {
  title: 'Mon Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
