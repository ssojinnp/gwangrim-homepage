import blackLogoUrl from '../../assets/logo-gwangrim-black.png';
import colorLogoUrl from '../../assets/logo-gwangrim-color.png';
import whiteLogoUrl from '../../assets/logo-gwangrim-white.png';

const logoUrlMap = {
  color: colorLogoUrl,
  white: whiteLogoUrl,
  black: blackLogoUrl,
};

const sizeClassMap = {
  sm: 'h-8 md:h-9',
  md: 'h-10 md:h-11',
  lg: 'h-12 md:h-14',
  hero: 'h-16 md:h-20 lg:h-24',
};

// 새 브랜드 로고 자산을 톤별로 재사용하기 위한 공통 컴포넌트입니다.
export function LogoMark({ size = 'md', tone = 'color', className = '' }) {
  return (
    <img
      className={`${sizeClassMap[size]} w-auto shrink-0 ${className}`.trim()}
      src={logoUrlMap[tone]}
      alt="광림전산 로고"
    />
  );
}
