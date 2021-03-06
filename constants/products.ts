import { getRelativePath } from '@/utils';

export type TProduct = {
  category: string;
  modal: string;
  coverUri: string;
  pdfUri: string;
};

export const THERMAL_PRESS: TProduct[] = [
  {
    coverUri: getRelativePath('/static/products/THERMAL_PRESS_URZD-34T.png'),
    category: 'Thremal Press Machine',
    modal: 'URZD-34T',
    pdfUri:
      'https://drive.google.com/file/d/1NoEKY0AkeBVmvaa7fiIooTo1kI41ucZZ/view?usp=sharing',
  },
];
export const MASKING: TProduct[] = [
  {
    coverUri: getRelativePath('/static/products/MASKING_MS-BGH2.png'),
    category: 'Automatic Paper Masking Machine',
    modal: 'MS-BGH2',
    pdfUri:
      'https://drive.google.com/file/d/1vXxJq8hPJ1OZ5oajbJtuPYWWm7xKjJ3w/view?usp=sharing',
  },
  {
    coverUri: getRelativePath('/static/products/MASLING_MS-BGB1.png'),
    category: 'Automatic Paper Masking Machine',
    modal: 'MS-BGB1',
    pdfUri:
      'https://drive.google.com/file/d/1skTtyarNeLAontIjnB2CY7xUZUwOkmsu/view?usp=sharing',
  },
  {
    coverUri: getRelativePath('/static/products/MASKING_MS-BGS2.png'),
    category: 'Automatic Paper Masking Machine',
    modal: 'MS-BGS2',
    pdfUri:
      'https://drive.google.com/file/d/1VjFteQIEPlpzCmfSAqpkuZ9QQnu6-WnG/view?usp=sharing',
  },
  {
    coverUri: getRelativePath(
      '/static/products/MASKING_MS-BGX1-round-type.png',
    ),
    category: 'Automatic Paper Masking Machine',
    modal: 'MS-BGX1 (Round type)',
    pdfUri:
      'https://drive.google.com/file/d/1jefvoXVinrMzcS6UDPLTmCEa3tEOZQ9J/view?usp=sharing',
  },
];
export const SPRAYING: TProduct[] = [
  {
    coverUri: getRelativePath('/static/products/SPRAYING_MS-PJD3.png'),
    category: 'Automatic Metal Spraying Machine',
    modal: 'MS-PJD3',
    pdfUri:
      'https://drive.google.com/file/d/1W8D_rcLcSkyAl7R894FtjVcM5YHIHNAy/view?usp=sharing',
  },
];
export const HEALING: TProduct[] = [
  {
    coverUri: getRelativePath('/static/products/HEALING_MS-FNB1.png'),
    category: 'Auto Healing Machine',
    modal: 'MS-FNB1',
    pdfUri:
      'https://drive.google.com/file/d/1rHO9L_RsfELFROcCzB_GOjx6MMqiIHf9/view?usp=sharing',
  },
  {
    coverUri: getRelativePath('/static/products/HEALING_FHP-C1.png'),
    category: 'Automatic Healing & Welding & Taping Machine',
    modal: 'FHP-C1',
    pdfUri:
      'https://drive.google.com/file/d/14KDiG8siCtQMyWEC3SR2iIRj3fsLBbK1/view?usp=sharing',
  },
  {
    coverUri: getRelativePath('/static/products/HEALING_MS-FHP-D1.png'),
    category: 'Automatic Welding & Taping Machine',
    modal: 'MS-FHP-D1',
    pdfUri:
      'https://drive.google.com/file/d/1wJHFEKroCnhyZXQ7Aj6-qbExKAR-FuDr/view?usp=sharing',
  },
  {
    coverUri: getRelativePath('/static/products/HEALING_MS-FHGP-C1.png'),
    category: 'Auto Healing & Welding & Assembling Machine',
    modal: 'MS-FHGP-C1',
    pdfUri:
      'https://drive.google.com/file/d/1DyaJczn-H2Ts_TJazre4wPNYyionar61/view?usp=sharing',
  },
  {
    coverUri: getRelativePath('/static/products/HEALING_MS-FHGH-C1.png'),
    category: 'Auto Healing & Welding & Assembling Machine',
    modal: 'MS-FHGH-C1',
    pdfUri:
      'https://drive.google.com/file/d/1NoYSiN6RJGsqoApVDaoz1CJX3_8Cj_ss/view?usp=sharing',
  },
  {
    coverUri: getRelativePath('/static/products/HEALING_MS-HGP-BC1.png'),
    category: 'Auto Welding & Assembling Machine',
    modal: 'MS-HGP-BC1',
    pdfUri:
      'https://drive.google.com/file/d/1pxF-eHi7D6tHnHWhhdrRCSFoyzytqLOT/view?usp=sharing',
  },
  {
    coverUri: getRelativePath('/static/products/HEALING_MS-FHGP-BC1.png'),
    category: 'Auto Healing & Welding & Assembling Machine',
    modal: 'MS-FHGP-BC1',
    pdfUri:
      'https://drive.google.com/file/d/1KpvphMg4eFYMmWkXQuT4zO2xPPAvWoIZ/view?usp=sharing',
  },
  {
    coverUri: getRelativePath('/static/products/HEALING_MS-HGP-B2.png'),
    category: 'Auto Welding & Assembling Machine',
    modal: 'MS-HGP-B2',
    pdfUri:
      'https://drive.google.com/file/d/1OWWLZDPrthp-kVy_vkm1YoyvFjc2R3Bl/view?usp=sharing',
  },
  {
    coverUri: getRelativePath('/static/products/HEALING_TE0117.png'),
    category: 'Flexible Wire & Welding & Assembling Machine',
    modal: 'TE0117',
    pdfUri:
      'https://drive.google.com/file/d/1_P4rhRlhtFvrJWS5CyDB_YfCWWQh_yTJ/view?usp=sharing',
  },
  {
    coverUri: getRelativePath('/static/products/HEALING_TE0147.png'),
    category:
      'Technical Index of Terminal Capacitor Welding Assembling Machine',
    modal: 'TE0147',
    pdfUri:
      'https://drive.google.com/file/d/1odYXxDdqTVwaOHOXx5HxV3lGRlWDWIxB/view?usp=sharing',
  },
];
export const AXIAL_TYPE: TProduct[] = [
  {
    coverUri: getRelativePath('/static/products/AXIAL_TYPE_MS-HBC1.png'),
    category: 'Automatic Capacitor Welding & Wrapping Machine',
    modal: 'MS-HBC1',
    pdfUri:
      'https://drive.google.com/file/d/1CuSzShGhqY0leJgDG0FrvYnr_ivoOtAM/view?usp=sharing',
  },
  {
    coverUri: getRelativePath('/static/products/AXIAL_TYPE_MS-BJC1.png'),
    category: 'Automatic Capacitor Wrapping Machine',
    modal: 'MS-BJC1',
    pdfUri:
      'https://drive.google.com/file/d/1jO42WFs9p8U2D-MYuXztq2Tw9OwDausM/view?usp=sharing',
  },
];
export const TEST_SORTING: TProduct[] = [
  {
    coverUri: getRelativePath('/static/products/TEST_SORTING_TE2808X.png'),
    category: 'Automatic Test Sorting Machine',
    modal: 'TE2808X',
    pdfUri:
      'https://drive.google.com/file/d/1tzRTIunxMhRHO6TekuIsY-v43CQrdaN4/view?usp=sharing',
  },
  {
    coverUri: getRelativePath('/static/products/TEST_SORTING_TE2803X-C.png'),
    category: 'Flexible Wire Capacitor Test Sorting Machine',
    modal: 'TE2803X-C',
    pdfUri:
      'https://drive.google.com/file/d/1Ava0MMUtT0q0hGzssE8sGnKeBOntGRMW/view?usp=sharing',
  },
  {
    coverUri: getRelativePath('/static/products/TEST_SORTING_TE2808-2.png'),
    category: 'Terminal Capacitor Sorting Machine',
    modal: 'TE2808-2',
    pdfUri:
      'https://drive.google.com/file/d/1zRdlPtLK6LQB7qq3AjvQljawSLhSd7qO/view?usp=sharing',
  },
  {
    coverUri: getRelativePath('/static/products/TEST_SORTING_TE20808X-C.png'),
    category: 'Four Lead Capacitor Tester Machine',
    modal: 'TE20808X-C',
    pdfUri:
      'https://drive.google.com/file/d/11w3nvGaIumjcZ3Hp0utsHC7LeAPco9r_/view?usp=sharing',
  },
];
export const FORMING_TAPPING: TProduct[] = [
  {
    coverUri: getRelativePath('/static/products/FORMING_YC-290-40.png'),
    category: 'Lead 90 Bending and Cutter Machine',
    modal: 'YC-290-40',
    pdfUri:
      'https://drive.google.com/file/d/1KduPGdyFYB21-BETKLaJikagCuvLzZ8z/view?usp=sharing',
  },
];
export const LASER_MARKING: TProduct[] = [
  {
    coverUri: getRelativePath('/static/products/LASER_MARKING_GQ30H-IIP-M.png'),
    category: 'Laser Marking Machine For Box Type',
    modal: 'GQ30H-IIP-M, GQ30H-IIP-L',
    pdfUri:
      'https://drive.google.com/file/d/1Fv27FIbG9aToRf4GvqNwkIKlmVH_qmBY/view?usp=sharing',
  },
  {
    coverUri: getRelativePath('/static/products/LASER_MARKING_GQ30H-IIP.png'),
    category: 'Laser Marking Machine For Box Type',
    modal: 'GQ30H-IIP',
    pdfUri:
      'https://drive.google.com/file/d/1gqCHUkIRduOpUirDcHLMp-WuS68wtksE/view?usp=sharing',
  },
];

export const productsOnHome = [
  THERMAL_PRESS[0],
  MASKING[0],
  MASKING[1],
  ...HEALING.slice(0, 4),
  LASER_MARKING[0],
];
