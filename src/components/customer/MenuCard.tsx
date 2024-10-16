import { NoImage } from '@/assets/icons';
import MenuOption from '@/components/customer/MenuOption';
import { Menu } from '@/stores/useCustomerStore';
import clsx from 'clsx';

interface CustomerMenuCardProps {
  menu: Menu;
  onOpenMenuDetail: () => void;
}

export default function CustomerMenuCard({ menu, onOpenMenuDetail }: CustomerMenuCardProps) {
  const { menuName, menuDetail, price, menuImg } = menu;

  return (
    <div
      className={clsx(
        'flex items-center gap-1 text-d900',
        (menu.hot || menu.new || menu.soldOut) && 'pt-5'
      )}
      onClick={onOpenMenuDetail}
    >
      <div className="relative flex h-20 w-20 items-center justify-center">
        <MenuOption optType={menu.hot ? 'hot' : menu.new ? 'new' : menu.soldOut ? 'soldOut' : ''} />
        {menuImg === '' ? <NoImage /> : <img src={menuImg} alt="메뉴 이미지" />}
      </div>
      <div className="flex flex-1 flex-col justify-evenly gap-1 px-1">
        <div className="text-base font-bold">{menuName}</div>
        <div className="text-xs text-d200">{menuDetail}</div>
        <div className="text-right text-sm font-bold">{price.toLocaleString()}원</div>
      </div>
    </div>
  );
}
