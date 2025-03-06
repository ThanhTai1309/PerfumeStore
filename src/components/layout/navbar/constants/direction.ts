type TSubMenu = {
    title: string,
    href: string
}

type TDirection = {
    title: string,
    href: string,
    subMenu?: TSubMenu[]
}
export const navDirection: TDirection[] = [
    {
        title: 'Trang chủ',
        href: '/'
    },
    {
        title: 'Brand',
        href: '/brand'
    },
    {
        title: 'Shop',
        href: '/shop',
        subMenu: [
            {
                title: 'Nước Hoa Nam',
                href: '/shop/nuoc-hoa-nam'
            },
            {
                title: 'Nước Hoa Nữ',
                href: '/shop/nuoc-hoa-nữ'
            },
            {
                title: 'Nước Hoa Unisex',
                href: '/shop/nuoc-hoa-unisex'
            }
        ]
    },
    {
        title: 'Blog',
        href: '/blog'
    }
]
