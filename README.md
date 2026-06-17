This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Необходимо перейти по ссылке в Figma (https://www.figma.com/file/9XgWK3p8hV7kGaeNbVqnpm/%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B8?type=design&node-id=0%3A1&mode=design&t=h09Rzn4ocBcWUV0t-1)
Сохранить файл себе в Draft
Сверстать все экраны с тарифами (отобразить выделение тарифов при выборе, 
на кнопку купить наложить анимационный эффект мигания (перехода у кнопки нет), 
отобразить таймер на закрепленном хедере - поставить 2 минуты, при остатке в 30 сек таймер мигает 
и выделяется красным). При нажатии на кнопку купить без проставленного чекбокса - 
он должен выделяться красным.
Разложить тарифы полученные от сервиса на страницу с тарифами.
Когда таймер заканчивается скидочные цены пропадают и остаются цены без скидки, 
предложить вариант как лучше это анимировать
Тестовое задание необходимо выполнить на следующий технологиях: React, Next, Tailwind.


Получение данных от сервиса
Ссылка на получение:
https://t-core.fit-hub.pro/Test/GetTariffs
Пример одной записи:
{
"id": "f347d050-073c-4969-ae91-7346f935cf70",
"period": "1 неделя",
"price": 149,
"full_price": 999,
"is_best": false,
"text": "Чтобы просто начать"
},
Необходимые для работы поля
period - период тарифа
price - цена тарифа со скидкой
full_price- цена тарифа без скидки
is_best - выбран по дефолту при первой загрузке страницы. У тарифа большая плашка в десктоп версии.
text - текст тарифы

Процент скидки нужно рассчитать самому.
