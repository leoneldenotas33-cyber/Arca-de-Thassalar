import './globals.css';

export const metadata = {
  title: 'Arca de Thassalar',
  description: 'Um jogo de realidade alternativa na escuridão',
};

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR'>
      <body className='bg-dark text-gray-100'>
        {children}
      </body>
    </html>
  );
}
