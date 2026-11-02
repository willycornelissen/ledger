// Generated automatically from EXPORT_2026_11_01_09_50_02.csv
import { Category, Transaction } from "../types/finance";

export const SEED_CATEGORIES: Category[] = [
  {
    "id": "cat_alimentos",
    "name": "Alimentos",
    "type": "expense",
    "color": "#f97316",
    "icon": "ShoppingBag"
  },
  {
    "id": "cat_uber",
    "name": "Uber",
    "type": "expense",
    "color": "#3b82f6",
    "icon": "Car"
  },
  {
    "id": "cat_comida",
    "name": "Comida",
    "type": "expense",
    "color": "#10b981",
    "icon": "Utensils"
  },
  {
    "id": "cat_hardware",
    "name": "Hardware",
    "type": "expense",
    "color": "#a855f7",
    "icon": "Laptop"
  },
  {
    "id": "cat_sa_de",
    "name": "Saúde",
    "type": "expense",
    "color": "#06b6d4",
    "icon": "HeartPulse"
  },
  {
    "id": "cat_higiene",
    "name": "Higiene",
    "type": "expense",
    "color": "#eab308",
    "icon": "Sparkles"
  },
  {
    "id": "cat_livros",
    "name": "Livros",
    "type": "expense",
    "color": "#ec4899",
    "icon": "BookOpen"
  },
  {
    "id": "cat_viagem",
    "name": "Viagem",
    "type": "expense",
    "color": "#6366f1",
    "icon": "Film"
  },
  {
    "id": "cat_casa",
    "name": "Casa",
    "type": "expense",
    "color": "#ef4444",
    "icon": "Home"
  },
  {
    "id": "cat_nova_acr_pole",
    "name": "Nova Acrópole",
    "type": "expense",
    "color": "#14b8a6",
    "icon": "BookOpen"
  },
  {
    "id": "cat_internet",
    "name": "Internet",
    "type": "expense",
    "color": "#8b5cf6",
    "icon": "Laptop"
  },
  {
    "id": "cat_entretenimento",
    "name": "Entretenimento",
    "type": "expense",
    "color": "#f43f5e",
    "icon": "Tv"
  },
  {
    "id": "cat_servi_os",
    "name": "Serviços",
    "type": "expense",
    "color": "#84cc16",
    "icon": "Briefcase"
  },
  {
    "id": "cat_aluguel",
    "name": "Aluguel",
    "type": "expense",
    "color": "#64748b",
    "icon": "Home"
  },
  {
    "id": "cat_carro",
    "name": "Carro",
    "type": "expense",
    "color": "#f97316",
    "icon": "Fuel"
  },
  {
    "id": "cat_transporte",
    "name": "Transporte",
    "type": "expense",
    "color": "#3b82f6",
    "icon": "Bus"
  },
  {
    "id": "cat_educa__o",
    "name": "Educação",
    "type": "expense",
    "color": "#10b981",
    "icon": "GraduationCap"
  },
  {
    "id": "cat_taxas",
    "name": "Taxas",
    "type": "expense",
    "color": "#a855f7",
    "icon": "CreditCard"
  },
  {
    "id": "cat_sal_rio",
    "name": "Salário",
    "type": "income",
    "color": "#06b6d4",
    "icon": "Briefcase"
  },
  {
    "id": "cat_doa__o",
    "name": "Doação",
    "type": "expense",
    "color": "#eab308",
    "icon": "Gift"
  },
  {
    "id": "cat_roupa",
    "name": "Roupa",
    "type": "expense",
    "color": "#ec4899",
    "icon": "ShoppingBag"
  },
  {
    "id": "cat_bitcoin",
    "name": "Bitcoin",
    "type": "expense",
    "color": "#6366f1",
    "icon": "TrendingUp"
  },
  {
    "id": "cat_hotel",
    "name": "Hotel",
    "type": "expense",
    "color": "#ef4444",
    "icon": "Home"
  },
  {
    "id": "cat_restitui__o_irpf",
    "name": "Restituição IRPF",
    "type": "income",
    "color": "#14b8a6",
    "icon": "Coins"
  },
  {
    "id": "cat_rateio",
    "name": "Rateio",
    "type": "income",
    "color": "#8b5cf6",
    "icon": "Coins"
  },
  {
    "id": "cat_supermercado",
    "name": "Supermercado",
    "type": "expense",
    "color": "#f43f5e",
    "icon": "ShoppingBag"
  }
];

export const SEED_TRANSACTIONS: Transaction[] = [
  {
    "id": "tx_seed_1",
    "type": "expense",
    "amount": 4000,
    "date": "2026-10-31",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408745,
    "updatedAt": 1793543408745
  },
  {
    "id": "tx_seed_2",
    "type": "expense",
    "amount": 2000,
    "date": "2026-10-31",
    "categoryId": "cat_uber",
    "createdAt": 1793543408746,
    "updatedAt": 1793543408746
  },
  {
    "id": "tx_seed_3",
    "type": "expense",
    "amount": 1600,
    "date": "2026-10-31",
    "categoryId": "cat_uber",
    "createdAt": 1793543408747,
    "updatedAt": 1793543408747
  },
  {
    "id": "tx_seed_4",
    "type": "expense",
    "amount": 6100,
    "date": "2026-10-31",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408748,
    "updatedAt": 1793543408748
  },
  {
    "id": "tx_seed_5",
    "type": "expense",
    "amount": 4400,
    "date": "2026-10-31",
    "categoryId": "cat_uber",
    "createdAt": 1793543408749,
    "updatedAt": 1793543408749
  },
  {
    "id": "tx_seed_6",
    "type": "expense",
    "amount": 3000,
    "date": "2026-10-31",
    "categoryId": "cat_uber",
    "createdAt": 1793543408750,
    "updatedAt": 1793543408750
  },
  {
    "id": "tx_seed_7",
    "type": "expense",
    "amount": 16500,
    "date": "2026-10-31",
    "categoryId": "cat_hardware",
    "note": "lanterna",
    "createdAt": 1793543408751,
    "updatedAt": 1793543408751
  },
  {
    "id": "tx_seed_8",
    "type": "expense",
    "amount": 5600,
    "date": "2026-10-30",
    "categoryId": "cat_sa_de",
    "createdAt": 1793543408752,
    "updatedAt": 1793543408752
  },
  {
    "id": "tx_seed_9",
    "type": "expense",
    "amount": 11800,
    "date": "2026-10-30",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408753,
    "updatedAt": 1793543408753
  },
  {
    "id": "tx_seed_10",
    "type": "expense",
    "amount": 9300,
    "date": "2026-10-30",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408754,
    "updatedAt": 1793543408754
  },
  {
    "id": "tx_seed_11",
    "type": "expense",
    "amount": 177900,
    "date": "2026-10-30",
    "categoryId": "cat_sa_de",
    "createdAt": 1793543408755,
    "updatedAt": 1793543408755
  },
  {
    "id": "tx_seed_12",
    "type": "expense",
    "amount": 3700,
    "date": "2026-10-30",
    "categoryId": "cat_uber",
    "createdAt": 1793543408756,
    "updatedAt": 1793543408756
  },
  {
    "id": "tx_seed_13",
    "type": "expense",
    "amount": 65000,
    "date": "2026-10-30",
    "categoryId": "cat_sa_de",
    "createdAt": 1793543408757,
    "updatedAt": 1793543408757
  },
  {
    "id": "tx_seed_14",
    "type": "expense",
    "amount": 5800,
    "date": "2026-10-30",
    "categoryId": "cat_uber",
    "createdAt": 1793543408758,
    "updatedAt": 1793543408758
  },
  {
    "id": "tx_seed_15",
    "type": "expense",
    "amount": 2800,
    "date": "2026-10-29",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408759,
    "updatedAt": 1793543408759
  },
  {
    "id": "tx_seed_16",
    "type": "expense",
    "amount": 4400,
    "date": "2026-10-29",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408760,
    "updatedAt": 1793543408760
  },
  {
    "id": "tx_seed_17",
    "type": "expense",
    "amount": 4400,
    "date": "2026-10-29",
    "categoryId": "cat_uber",
    "createdAt": 1793543408761,
    "updatedAt": 1793543408761
  },
  {
    "id": "tx_seed_18",
    "type": "expense",
    "amount": 4900,
    "date": "2026-10-29",
    "categoryId": "cat_uber",
    "createdAt": 1793543408762,
    "updatedAt": 1793543408762
  },
  {
    "id": "tx_seed_19",
    "type": "expense",
    "amount": 4000,
    "date": "2026-10-28",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408763,
    "updatedAt": 1793543408763
  },
  {
    "id": "tx_seed_20",
    "type": "expense",
    "amount": 4300,
    "date": "2026-10-28",
    "categoryId": "cat_uber",
    "createdAt": 1793543408764,
    "updatedAt": 1793543408764
  },
  {
    "id": "tx_seed_21",
    "type": "expense",
    "amount": 2800,
    "date": "2026-10-28",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408765,
    "updatedAt": 1793543408765
  },
  {
    "id": "tx_seed_22",
    "type": "expense",
    "amount": 3600,
    "date": "2026-10-28",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408766,
    "updatedAt": 1793543408766
  },
  {
    "id": "tx_seed_23",
    "type": "expense",
    "amount": 5100,
    "date": "2026-10-28",
    "categoryId": "cat_uber",
    "createdAt": 1793543408767,
    "updatedAt": 1793543408767
  },
  {
    "id": "tx_seed_24",
    "type": "expense",
    "amount": 2600,
    "date": "2026-10-27",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408768,
    "updatedAt": 1793543408768
  },
  {
    "id": "tx_seed_25",
    "type": "expense",
    "amount": 4100,
    "date": "2026-10-27",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408769,
    "updatedAt": 1793543408769
  },
  {
    "id": "tx_seed_26",
    "type": "expense",
    "amount": 3600,
    "date": "2026-10-27",
    "categoryId": "cat_uber",
    "createdAt": 1793543408770,
    "updatedAt": 1793543408770
  },
  {
    "id": "tx_seed_27",
    "type": "expense",
    "amount": 3800,
    "date": "2026-10-27",
    "categoryId": "cat_uber",
    "createdAt": 1793543408771,
    "updatedAt": 1793543408771
  },
  {
    "id": "tx_seed_28",
    "type": "expense",
    "amount": 3100,
    "date": "2026-10-26",
    "categoryId": "cat_uber",
    "createdAt": 1793543408772,
    "updatedAt": 1793543408772
  },
  {
    "id": "tx_seed_29",
    "type": "expense",
    "amount": 2300,
    "date": "2026-10-26",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408773,
    "updatedAt": 1793543408773
  },
  {
    "id": "tx_seed_30",
    "type": "expense",
    "amount": 4000,
    "date": "2026-10-26",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408774,
    "updatedAt": 1793543408774
  },
  {
    "id": "tx_seed_31",
    "type": "expense",
    "amount": 4000,
    "date": "2026-10-26",
    "categoryId": "cat_uber",
    "createdAt": 1793543408775,
    "updatedAt": 1793543408775
  },
  {
    "id": "tx_seed_32",
    "type": "expense",
    "amount": 5100,
    "date": "2026-10-26",
    "categoryId": "cat_uber",
    "createdAt": 1793543408776,
    "updatedAt": 1793543408776
  },
  {
    "id": "tx_seed_33",
    "type": "expense",
    "amount": 4800,
    "date": "2026-10-25",
    "categoryId": "cat_uber",
    "createdAt": 1793543408777,
    "updatedAt": 1793543408777
  },
  {
    "id": "tx_seed_34",
    "type": "expense",
    "amount": 3300,
    "date": "2026-10-25",
    "categoryId": "cat_uber",
    "createdAt": 1793543408778,
    "updatedAt": 1793543408778
  },
  {
    "id": "tx_seed_35",
    "type": "expense",
    "amount": 34000,
    "date": "2026-10-24",
    "categoryId": "cat_higiene",
    "note": "perfumes",
    "createdAt": 1793543408779,
    "updatedAt": 1793543408779
  },
  {
    "id": "tx_seed_36",
    "type": "expense",
    "amount": 1800,
    "date": "2026-10-24",
    "categoryId": "cat_uber",
    "createdAt": 1793543408780,
    "updatedAt": 1793543408780
  },
  {
    "id": "tx_seed_37",
    "type": "expense",
    "amount": 2500,
    "date": "2026-10-24",
    "categoryId": "cat_uber",
    "createdAt": 1793543408781,
    "updatedAt": 1793543408781
  },
  {
    "id": "tx_seed_38",
    "type": "expense",
    "amount": 3100,
    "date": "2026-10-24",
    "categoryId": "cat_uber",
    "createdAt": 1793543408782,
    "updatedAt": 1793543408782
  },
  {
    "id": "tx_seed_39",
    "type": "expense",
    "amount": 8700,
    "date": "2026-10-24",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408783,
    "updatedAt": 1793543408783
  },
  {
    "id": "tx_seed_40",
    "type": "expense",
    "amount": 11300,
    "date": "2026-10-24",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408784,
    "updatedAt": 1793543408784
  },
  {
    "id": "tx_seed_41",
    "type": "expense",
    "amount": 3400,
    "date": "2026-10-23",
    "categoryId": "cat_uber",
    "createdAt": 1793543408785,
    "updatedAt": 1793543408785
  },
  {
    "id": "tx_seed_42",
    "type": "expense",
    "amount": 3900,
    "date": "2026-10-23",
    "categoryId": "cat_uber",
    "createdAt": 1793543408786,
    "updatedAt": 1793543408786
  },
  {
    "id": "tx_seed_43",
    "type": "expense",
    "amount": 3200,
    "date": "2026-10-23",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408787,
    "updatedAt": 1793543408787
  },
  {
    "id": "tx_seed_44",
    "type": "expense",
    "amount": 3900,
    "date": "2026-10-23",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408788,
    "updatedAt": 1793543408788
  },
  {
    "id": "tx_seed_45",
    "type": "expense",
    "amount": 4000,
    "date": "2026-10-23",
    "categoryId": "cat_livros",
    "createdAt": 1793543408789,
    "updatedAt": 1793543408789
  },
  {
    "id": "tx_seed_46",
    "type": "expense",
    "amount": 5100,
    "date": "2026-10-23",
    "categoryId": "cat_uber",
    "createdAt": 1793543408790,
    "updatedAt": 1793543408790
  },
  {
    "id": "tx_seed_47",
    "type": "expense",
    "amount": 5100,
    "date": "2026-10-22",
    "categoryId": "cat_uber",
    "createdAt": 1793543408791,
    "updatedAt": 1793543408791
  },
  {
    "id": "tx_seed_48",
    "type": "expense",
    "amount": 1900,
    "date": "2026-10-21",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408792,
    "updatedAt": 1793543408792
  },
  {
    "id": "tx_seed_49",
    "type": "expense",
    "amount": 4000,
    "date": "2026-10-21",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408793,
    "updatedAt": 1793543408793
  },
  {
    "id": "tx_seed_50",
    "type": "expense",
    "amount": 4100,
    "date": "2026-10-21",
    "categoryId": "cat_uber",
    "createdAt": 1793543408794,
    "updatedAt": 1793543408794
  },
  {
    "id": "tx_seed_51",
    "type": "expense",
    "amount": 2900,
    "date": "2026-10-21",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408795,
    "updatedAt": 1793543408795
  },
  {
    "id": "tx_seed_52",
    "type": "expense",
    "amount": 5100,
    "date": "2026-10-21",
    "categoryId": "cat_uber",
    "createdAt": 1793543408796,
    "updatedAt": 1793543408796
  },
  {
    "id": "tx_seed_53",
    "type": "expense",
    "amount": 3200,
    "date": "2026-10-20",
    "categoryId": "cat_uber",
    "createdAt": 1793543408797,
    "updatedAt": 1793543408797
  },
  {
    "id": "tx_seed_54",
    "type": "expense",
    "amount": 1900,
    "date": "2026-10-20",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408798,
    "updatedAt": 1793543408798
  },
  {
    "id": "tx_seed_55",
    "type": "expense",
    "amount": 4000,
    "date": "2026-10-20",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408799,
    "updatedAt": 1793543408799
  },
  {
    "id": "tx_seed_56",
    "type": "expense",
    "amount": 3700,
    "date": "2026-10-20",
    "categoryId": "cat_uber",
    "createdAt": 1793543408800,
    "updatedAt": 1793543408800
  },
  {
    "id": "tx_seed_57",
    "type": "expense",
    "amount": 5100,
    "date": "2026-10-20",
    "categoryId": "cat_uber",
    "createdAt": 1793543408801,
    "updatedAt": 1793543408801
  },
  {
    "id": "tx_seed_58",
    "type": "expense",
    "amount": 11000,
    "date": "2026-10-19",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408802,
    "updatedAt": 1793543408802
  },
  {
    "id": "tx_seed_59",
    "type": "expense",
    "amount": 3200,
    "date": "2026-10-19",
    "categoryId": "cat_uber",
    "createdAt": 1793543408803,
    "updatedAt": 1793543408803
  },
  {
    "id": "tx_seed_60",
    "type": "expense",
    "amount": 3700,
    "date": "2026-10-19",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408804,
    "updatedAt": 1793543408804
  },
  {
    "id": "tx_seed_61",
    "type": "expense",
    "amount": 2100,
    "date": "2026-10-19",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408805,
    "updatedAt": 1793543408805
  },
  {
    "id": "tx_seed_62",
    "type": "expense",
    "amount": 4000,
    "date": "2026-10-19",
    "categoryId": "cat_uber",
    "createdAt": 1793543408806,
    "updatedAt": 1793543408806
  },
  {
    "id": "tx_seed_63",
    "type": "expense",
    "amount": 4200,
    "date": "2026-10-19",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408807,
    "updatedAt": 1793543408807
  },
  {
    "id": "tx_seed_64",
    "type": "expense",
    "amount": 6200,
    "date": "2026-10-19",
    "categoryId": "cat_uber",
    "createdAt": 1793543408808,
    "updatedAt": 1793543408808
  },
  {
    "id": "tx_seed_65",
    "type": "expense",
    "amount": 2500,
    "date": "2026-10-18",
    "categoryId": "cat_livros",
    "createdAt": 1793543408809,
    "updatedAt": 1793543408809
  },
  {
    "id": "tx_seed_66",
    "type": "expense",
    "amount": 10000,
    "date": "2026-10-18",
    "categoryId": "cat_uber",
    "createdAt": 1793543408810,
    "updatedAt": 1793543408810
  },
  {
    "id": "tx_seed_67",
    "type": "expense",
    "amount": 29800,
    "date": "2026-10-17",
    "categoryId": "cat_livros",
    "createdAt": 1793543408811,
    "updatedAt": 1793543408811
  },
  {
    "id": "tx_seed_68",
    "type": "expense",
    "amount": 6100,
    "date": "2026-10-16",
    "categoryId": "cat_uber",
    "createdAt": 1793543408812,
    "updatedAt": 1793543408812
  },
  {
    "id": "tx_seed_69",
    "type": "expense",
    "amount": 3800,
    "date": "2026-10-16",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408813,
    "updatedAt": 1793543408813
  },
  {
    "id": "tx_seed_70",
    "type": "expense",
    "amount": 5700,
    "date": "2026-10-16",
    "categoryId": "cat_uber",
    "createdAt": 1793543408814,
    "updatedAt": 1793543408814
  },
  {
    "id": "tx_seed_71",
    "type": "expense",
    "amount": 4100,
    "date": "2026-10-15",
    "categoryId": "cat_uber",
    "createdAt": 1793543408815,
    "updatedAt": 1793543408815
  },
  {
    "id": "tx_seed_72",
    "type": "expense",
    "amount": 2900,
    "date": "2026-10-15",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408816,
    "updatedAt": 1793543408816
  },
  {
    "id": "tx_seed_73",
    "type": "expense",
    "amount": 3100,
    "date": "2026-10-15",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408817,
    "updatedAt": 1793543408817
  },
  {
    "id": "tx_seed_74",
    "type": "expense",
    "amount": 2900,
    "date": "2026-10-15",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408818,
    "updatedAt": 1793543408818
  },
  {
    "id": "tx_seed_75",
    "type": "expense",
    "amount": 5100,
    "date": "2026-10-15",
    "categoryId": "cat_uber",
    "createdAt": 1793543408819,
    "updatedAt": 1793543408819
  },
  {
    "id": "tx_seed_76",
    "type": "expense",
    "amount": 125000,
    "date": "2026-10-14",
    "categoryId": "cat_viagem",
    "note": "1/6 Grécia",
    "createdAt": 1793543408820,
    "updatedAt": 1793543408820
  },
  {
    "id": "tx_seed_77",
    "type": "expense",
    "amount": 3900,
    "date": "2026-10-14",
    "categoryId": "cat_uber",
    "createdAt": 1793543408821,
    "updatedAt": 1793543408821
  },
  {
    "id": "tx_seed_78",
    "type": "expense",
    "amount": 3700,
    "date": "2026-10-14",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408822,
    "updatedAt": 1793543408822
  },
  {
    "id": "tx_seed_79",
    "type": "expense",
    "amount": 5200,
    "date": "2026-10-14",
    "categoryId": "cat_uber",
    "createdAt": 1793543408823,
    "updatedAt": 1793543408823
  },
  {
    "id": "tx_seed_80",
    "type": "expense",
    "amount": 4100,
    "date": "2026-10-13",
    "categoryId": "cat_uber",
    "createdAt": 1793543408824,
    "updatedAt": 1793543408824
  },
  {
    "id": "tx_seed_81",
    "type": "expense",
    "amount": 2100,
    "date": "2026-10-13",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408825,
    "updatedAt": 1793543408825
  },
  {
    "id": "tx_seed_82",
    "type": "expense",
    "amount": 3700,
    "date": "2026-10-13",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408826,
    "updatedAt": 1793543408826
  },
  {
    "id": "tx_seed_83",
    "type": "expense",
    "amount": 20000,
    "date": "2026-10-13",
    "categoryId": "cat_casa",
    "createdAt": 1793543408827,
    "updatedAt": 1793543408827
  },
  {
    "id": "tx_seed_84",
    "type": "expense",
    "amount": 5400,
    "date": "2026-10-13",
    "categoryId": "cat_uber",
    "createdAt": 1793543408828,
    "updatedAt": 1793543408828
  },
  {
    "id": "tx_seed_85",
    "type": "expense",
    "amount": 12100,
    "date": "2026-10-12",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408829,
    "updatedAt": 1793543408829
  },
  {
    "id": "tx_seed_86",
    "type": "expense",
    "amount": 730000,
    "date": "2026-10-11",
    "categoryId": "cat_viagem",
    "note": "avião Grécia",
    "createdAt": 1793543408830,
    "updatedAt": 1793543408830
  },
  {
    "id": "tx_seed_87",
    "type": "expense",
    "amount": 9000,
    "date": "2026-10-10",
    "categoryId": "cat_casa",
    "createdAt": 1793543408831,
    "updatedAt": 1793543408831
  },
  {
    "id": "tx_seed_88",
    "type": "expense",
    "amount": 60000,
    "date": "2026-10-10",
    "categoryId": "cat_nova_acr_pole",
    "note": "MSJ",
    "createdAt": 1793543408832,
    "updatedAt": 1793543408832
  },
  {
    "id": "tx_seed_89",
    "type": "expense",
    "amount": 12900,
    "date": "2026-10-10",
    "categoryId": "cat_internet",
    "note": "Blink",
    "createdAt": 1793543408833,
    "updatedAt": 1793543408833
  },
  {
    "id": "tx_seed_90",
    "type": "expense",
    "amount": 12900,
    "date": "2026-10-08",
    "categoryId": "cat_internet",
    "note": "internet",
    "createdAt": 1793543408834,
    "updatedAt": 1793543408834
  },
  {
    "id": "tx_seed_91",
    "type": "expense",
    "amount": 40000,
    "date": "2026-10-08",
    "categoryId": "cat_entretenimento",
    "note": "clube",
    "createdAt": 1793543408835,
    "updatedAt": 1793543408835
  },
  {
    "id": "tx_seed_92",
    "type": "expense",
    "amount": 7600,
    "date": "2026-10-08",
    "categoryId": "cat_servi_os",
    "note": "vivo",
    "createdAt": 1793543408836,
    "updatedAt": 1793543408836
  },
  {
    "id": "tx_seed_93",
    "type": "expense",
    "amount": 27600,
    "date": "2026-10-08",
    "categoryId": "cat_servi_os",
    "note": "cemig",
    "createdAt": 1793543408837,
    "updatedAt": 1793543408837
  },
  {
    "id": "tx_seed_94",
    "type": "expense",
    "amount": 7300,
    "date": "2026-10-08",
    "categoryId": "cat_servi_os",
    "note": "box100",
    "createdAt": 1793543408838,
    "updatedAt": 1793543408838
  },
  {
    "id": "tx_seed_95",
    "type": "expense",
    "amount": 28500,
    "date": "2026-10-08",
    "categoryId": "cat_nova_acr_pole",
    "createdAt": 1793543408839,
    "updatedAt": 1793543408839
  },
  {
    "id": "tx_seed_96",
    "type": "expense",
    "amount": 63500,
    "date": "2026-10-08",
    "categoryId": "cat_aluguel",
    "createdAt": 1793543408840,
    "updatedAt": 1793543408840
  },
  {
    "id": "tx_seed_97",
    "type": "expense",
    "amount": 245900,
    "date": "2026-10-08",
    "categoryId": "cat_carro",
    "createdAt": 1793543408841,
    "updatedAt": 1793543408841
  },
  {
    "id": "tx_seed_98",
    "type": "expense",
    "amount": 377600,
    "date": "2026-10-08",
    "categoryId": "cat_aluguel",
    "createdAt": 1793543408842,
    "updatedAt": 1793543408842
  },
  {
    "id": "tx_seed_99",
    "type": "expense",
    "amount": 167000,
    "date": "2026-10-08",
    "categoryId": "cat_sa_de",
    "note": "plano de saúde",
    "createdAt": 1793543408843,
    "updatedAt": 1793543408843
  },
  {
    "id": "tx_seed_100",
    "type": "expense",
    "amount": 5500,
    "date": "2026-10-06",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408844,
    "updatedAt": 1793543408844
  },
  {
    "id": "tx_seed_101",
    "type": "expense",
    "amount": 3200,
    "date": "2026-10-06",
    "categoryId": "cat_uber",
    "createdAt": 1793543408845,
    "updatedAt": 1793543408845
  },
  {
    "id": "tx_seed_102",
    "type": "expense",
    "amount": 17000,
    "date": "2026-10-06",
    "categoryId": "cat_nova_acr_pole",
    "note": "pastas",
    "createdAt": 1793543408846,
    "updatedAt": 1793543408846
  },
  {
    "id": "tx_seed_103",
    "type": "expense",
    "amount": 7400,
    "date": "2026-10-06",
    "categoryId": "cat_comida",
    "createdAt": 1793543408847,
    "updatedAt": 1793543408847
  },
  {
    "id": "tx_seed_104",
    "type": "expense",
    "amount": 16000,
    "date": "2026-10-05",
    "categoryId": "cat_transporte",
    "createdAt": 1793543408848,
    "updatedAt": 1793543408848
  },
  {
    "id": "tx_seed_105",
    "type": "expense",
    "amount": 5300,
    "date": "2026-10-05",
    "categoryId": "cat_uber",
    "createdAt": 1793543408849,
    "updatedAt": 1793543408849
  },
  {
    "id": "tx_seed_106",
    "type": "expense",
    "amount": 3800,
    "date": "2026-10-05",
    "categoryId": "cat_uber",
    "createdAt": 1793543408850,
    "updatedAt": 1793543408850
  },
  {
    "id": "tx_seed_107",
    "type": "expense",
    "amount": 9600,
    "date": "2026-10-05",
    "categoryId": "cat_comida",
    "createdAt": 1793543408851,
    "updatedAt": 1793543408851
  },
  {
    "id": "tx_seed_108",
    "type": "expense",
    "amount": 193700,
    "date": "2026-10-05",
    "categoryId": "cat_sa_de",
    "note": "mounjaro",
    "createdAt": 1793543408852,
    "updatedAt": 1793543408852
  },
  {
    "id": "tx_seed_109",
    "type": "expense",
    "amount": 6100,
    "date": "2026-10-03",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408853,
    "updatedAt": 1793543408853
  },
  {
    "id": "tx_seed_110",
    "type": "expense",
    "amount": 13800,
    "date": "2026-10-02",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408854,
    "updatedAt": 1793543408854
  },
  {
    "id": "tx_seed_111",
    "type": "expense",
    "amount": 5100,
    "date": "2026-10-02",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408855,
    "updatedAt": 1793543408855
  },
  {
    "id": "tx_seed_112",
    "type": "expense",
    "amount": 40000,
    "date": "2026-10-02",
    "categoryId": "cat_nova_acr_pole",
    "note": "irmanamento BSB",
    "createdAt": 1793543408856,
    "updatedAt": 1793543408856
  },
  {
    "id": "tx_seed_113",
    "type": "expense",
    "amount": 4900,
    "date": "2026-10-01",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408857,
    "updatedAt": 1793543408857
  },
  {
    "id": "tx_seed_114",
    "type": "expense",
    "amount": 5200,
    "date": "2026-10-01",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408858,
    "updatedAt": 1793543408858
  },
  {
    "id": "tx_seed_115",
    "type": "expense",
    "amount": 14400,
    "date": "2026-10-01",
    "categoryId": "cat_livros",
    "createdAt": 1793543408859,
    "updatedAt": 1793543408859
  },
  {
    "id": "tx_seed_116",
    "type": "expense",
    "amount": 11600,
    "date": "2026-09-28",
    "categoryId": "cat_uber",
    "createdAt": 1793543408860,
    "updatedAt": 1793543408860
  },
  {
    "id": "tx_seed_117",
    "type": "expense",
    "amount": 10900,
    "date": "2026-09-28",
    "categoryId": "cat_comida",
    "createdAt": 1793543408861,
    "updatedAt": 1793543408861
  },
  {
    "id": "tx_seed_118",
    "type": "expense",
    "amount": 11900,
    "date": "2026-09-27",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408862,
    "updatedAt": 1793543408862
  },
  {
    "id": "tx_seed_119",
    "type": "expense",
    "amount": 10900,
    "date": "2026-09-26",
    "categoryId": "cat_comida",
    "createdAt": 1793543408863,
    "updatedAt": 1793543408863
  },
  {
    "id": "tx_seed_120",
    "type": "expense",
    "amount": 4100,
    "date": "2026-09-26",
    "categoryId": "cat_comida",
    "note": "Café da manhã",
    "createdAt": 1793543408864,
    "updatedAt": 1793543408864
  },
  {
    "id": "tx_seed_121",
    "type": "expense",
    "amount": 4800,
    "date": "2026-09-25",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408865,
    "updatedAt": 1793543408865
  },
  {
    "id": "tx_seed_122",
    "type": "expense",
    "amount": 10300,
    "date": "2026-09-25",
    "categoryId": "cat_nova_acr_pole",
    "createdAt": 1793543408866,
    "updatedAt": 1793543408866
  },
  {
    "id": "tx_seed_123",
    "type": "expense",
    "amount": 13700,
    "date": "2026-09-25",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408867,
    "updatedAt": 1793543408867
  },
  {
    "id": "tx_seed_124",
    "type": "expense",
    "amount": 2100,
    "date": "2026-09-24",
    "categoryId": "cat_uber",
    "createdAt": 1793543408868,
    "updatedAt": 1793543408868
  },
  {
    "id": "tx_seed_125",
    "type": "expense",
    "amount": 3300,
    "date": "2026-09-24",
    "categoryId": "cat_uber",
    "createdAt": 1793543408869,
    "updatedAt": 1793543408869
  },
  {
    "id": "tx_seed_126",
    "type": "expense",
    "amount": 2400,
    "date": "2026-09-23",
    "categoryId": "cat_uber",
    "createdAt": 1793543408870,
    "updatedAt": 1793543408870
  },
  {
    "id": "tx_seed_127",
    "type": "expense",
    "amount": 10100,
    "date": "2026-09-23",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408871,
    "updatedAt": 1793543408871
  },
  {
    "id": "tx_seed_128",
    "type": "expense",
    "amount": 3800,
    "date": "2026-09-23",
    "categoryId": "cat_uber",
    "createdAt": 1793543408872,
    "updatedAt": 1793543408872
  },
  {
    "id": "tx_seed_129",
    "type": "expense",
    "amount": 6000,
    "date": "2026-09-22",
    "categoryId": "cat_comida",
    "createdAt": 1793543408873,
    "updatedAt": 1793543408873
  },
  {
    "id": "tx_seed_130",
    "type": "expense",
    "amount": 3500,
    "date": "2026-09-22",
    "categoryId": "cat_uber",
    "createdAt": 1793543408874,
    "updatedAt": 1793543408874
  },
  {
    "id": "tx_seed_131",
    "type": "expense",
    "amount": 4200,
    "date": "2026-09-22",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408875,
    "updatedAt": 1793543408875
  },
  {
    "id": "tx_seed_132",
    "type": "expense",
    "amount": 5000,
    "date": "2026-09-22",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408876,
    "updatedAt": 1793543408876
  },
  {
    "id": "tx_seed_133",
    "type": "expense",
    "amount": 2500,
    "date": "2026-09-21",
    "categoryId": "cat_uber",
    "createdAt": 1793543408877,
    "updatedAt": 1793543408877
  },
  {
    "id": "tx_seed_134",
    "type": "expense",
    "amount": 9600,
    "date": "2026-09-21",
    "categoryId": "cat_uber",
    "createdAt": 1793543408878,
    "updatedAt": 1793543408878
  },
  {
    "id": "tx_seed_135",
    "type": "expense",
    "amount": 5100,
    "date": "2026-09-21",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408879,
    "updatedAt": 1793543408879
  },
  {
    "id": "tx_seed_136",
    "type": "expense",
    "amount": 4200,
    "date": "2026-09-21",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408880,
    "updatedAt": 1793543408880
  },
  {
    "id": "tx_seed_137",
    "type": "expense",
    "amount": 10100,
    "date": "2026-09-21",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408881,
    "updatedAt": 1793543408881
  },
  {
    "id": "tx_seed_138",
    "type": "expense",
    "amount": 5200,
    "date": "2026-09-19",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408882,
    "updatedAt": 1793543408882
  },
  {
    "id": "tx_seed_139",
    "type": "expense",
    "amount": 21000,
    "date": "2026-09-19",
    "categoryId": "cat_nova_acr_pole",
    "createdAt": 1793543408883,
    "updatedAt": 1793543408883
  },
  {
    "id": "tx_seed_140",
    "type": "expense",
    "amount": 12200,
    "date": "2026-09-18",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408884,
    "updatedAt": 1793543408884
  },
  {
    "id": "tx_seed_141",
    "type": "expense",
    "amount": 3000,
    "date": "2026-09-18",
    "categoryId": "cat_educa__o",
    "createdAt": 1793543408885,
    "updatedAt": 1793543408885
  },
  {
    "id": "tx_seed_142",
    "type": "expense",
    "amount": 3700,
    "date": "2026-09-18",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408886,
    "updatedAt": 1793543408886
  },
  {
    "id": "tx_seed_143",
    "type": "expense",
    "amount": 2700,
    "date": "2026-09-18",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408887,
    "updatedAt": 1793543408887
  },
  {
    "id": "tx_seed_144",
    "type": "expense",
    "amount": 2300,
    "date": "2026-09-17",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408889,
    "updatedAt": 1793543408889
  },
  {
    "id": "tx_seed_145",
    "type": "expense",
    "amount": 2600,
    "date": "2026-09-17",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408890,
    "updatedAt": 1793543408890
  },
  {
    "id": "tx_seed_146",
    "type": "expense",
    "amount": 19600,
    "date": "2026-09-17",
    "categoryId": "cat_hardware",
    "note": "pendrive chaveiro",
    "createdAt": 1793543408891,
    "updatedAt": 1793543408891
  },
  {
    "id": "tx_seed_147",
    "type": "expense",
    "amount": 5000,
    "date": "2026-09-16",
    "categoryId": "cat_livros",
    "createdAt": 1793543408892,
    "updatedAt": 1793543408892
  },
  {
    "id": "tx_seed_148",
    "type": "expense",
    "amount": 1800,
    "date": "2026-09-16",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408893,
    "updatedAt": 1793543408893
  },
  {
    "id": "tx_seed_149",
    "type": "expense",
    "amount": 3300,
    "date": "2026-09-16",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408894,
    "updatedAt": 1793543408894
  },
  {
    "id": "tx_seed_150",
    "type": "expense",
    "amount": 18300,
    "date": "2026-09-15",
    "categoryId": "cat_carro",
    "createdAt": 1793543408895,
    "updatedAt": 1793543408895
  },
  {
    "id": "tx_seed_151",
    "type": "expense",
    "amount": 12900,
    "date": "2026-09-15",
    "categoryId": "cat_internet",
    "createdAt": 1793543408896,
    "updatedAt": 1793543408896
  },
  {
    "id": "tx_seed_152",
    "type": "expense",
    "amount": 3800,
    "date": "2026-09-14",
    "categoryId": "cat_comida",
    "createdAt": 1793543408897,
    "updatedAt": 1793543408897
  },
  {
    "id": "tx_seed_153",
    "type": "expense",
    "amount": 5500,
    "date": "2026-09-14",
    "categoryId": "cat_livros",
    "createdAt": 1793543408898,
    "updatedAt": 1793543408898
  },
  {
    "id": "tx_seed_154",
    "type": "expense",
    "amount": 4400,
    "date": "2026-09-14",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408899,
    "updatedAt": 1793543408899
  },
  {
    "id": "tx_seed_155",
    "type": "expense",
    "amount": 2000,
    "date": "2026-09-13",
    "categoryId": "cat_uber",
    "createdAt": 1793543408900,
    "updatedAt": 1793543408900
  },
  {
    "id": "tx_seed_156",
    "type": "expense",
    "amount": 2700,
    "date": "2026-09-13",
    "categoryId": "cat_uber",
    "createdAt": 1793543408901,
    "updatedAt": 1793543408901
  },
  {
    "id": "tx_seed_157",
    "type": "expense",
    "amount": 3000,
    "date": "2026-09-13",
    "categoryId": "cat_uber",
    "createdAt": 1793543408902,
    "updatedAt": 1793543408902
  },
  {
    "id": "tx_seed_158",
    "type": "expense",
    "amount": 2000,
    "date": "2026-09-13",
    "categoryId": "cat_uber",
    "createdAt": 1793543408903,
    "updatedAt": 1793543408903
  },
  {
    "id": "tx_seed_159",
    "type": "expense",
    "amount": 4900,
    "date": "2026-09-12",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408904,
    "updatedAt": 1793543408904
  },
  {
    "id": "tx_seed_160",
    "type": "expense",
    "amount": 37500,
    "date": "2026-09-12",
    "categoryId": "cat_sa_de",
    "createdAt": 1793543408905,
    "updatedAt": 1793543408905
  },
  {
    "id": "tx_seed_161",
    "type": "expense",
    "amount": 28300,
    "date": "2026-09-11",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408906,
    "updatedAt": 1793543408906
  },
  {
    "id": "tx_seed_162",
    "type": "expense",
    "amount": 4600,
    "date": "2026-09-11",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408907,
    "updatedAt": 1793543408907
  },
  {
    "id": "tx_seed_163",
    "type": "expense",
    "amount": 4600,
    "date": "2026-09-11",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408908,
    "updatedAt": 1793543408908
  },
  {
    "id": "tx_seed_164",
    "type": "expense",
    "amount": 13900,
    "date": "2026-09-11",
    "categoryId": "cat_aluguel",
    "note": "taxa",
    "createdAt": 1793543408909,
    "updatedAt": 1793543408909
  },
  {
    "id": "tx_seed_165",
    "type": "expense",
    "amount": 2900,
    "date": "2026-09-11",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408910,
    "updatedAt": 1793543408910
  },
  {
    "id": "tx_seed_166",
    "type": "expense",
    "amount": 3900,
    "date": "2026-09-10",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408911,
    "updatedAt": 1793543408911
  },
  {
    "id": "tx_seed_167",
    "type": "expense",
    "amount": 4400,
    "date": "2026-09-10",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408912,
    "updatedAt": 1793543408912
  },
  {
    "id": "tx_seed_168",
    "type": "expense",
    "amount": 10400,
    "date": "2026-09-10",
    "categoryId": "cat_casa",
    "note": "almofada para elevar os pés",
    "createdAt": 1793543408913,
    "updatedAt": 1793543408913
  },
  {
    "id": "tx_seed_169",
    "type": "expense",
    "amount": 4100,
    "date": "2026-09-10",
    "categoryId": "cat_casa",
    "createdAt": 1793543408914,
    "updatedAt": 1793543408914
  },
  {
    "id": "tx_seed_170",
    "type": "expense",
    "amount": 245900,
    "date": "2026-09-10",
    "categoryId": "cat_carro",
    "createdAt": 1793543408915,
    "updatedAt": 1793543408915
  },
  {
    "id": "tx_seed_171",
    "type": "expense",
    "amount": 152300,
    "date": "2026-09-09",
    "categoryId": "cat_sa_de",
    "note": "mounjaro",
    "createdAt": 1793543408916,
    "updatedAt": 1793543408916
  },
  {
    "id": "tx_seed_172",
    "type": "expense",
    "amount": 19200,
    "date": "2026-09-09",
    "categoryId": "cat_carro",
    "createdAt": 1793543408917,
    "updatedAt": 1793543408917
  },
  {
    "id": "tx_seed_173",
    "type": "expense",
    "amount": 7800,
    "date": "2026-09-09",
    "categoryId": "cat_comida",
    "note": "almoço e janta",
    "createdAt": 1793543408918,
    "updatedAt": 1793543408918
  },
  {
    "id": "tx_seed_174",
    "type": "expense",
    "amount": 25000,
    "date": "2026-09-09",
    "categoryId": "cat_entretenimento",
    "note": "Elza",
    "createdAt": 1793543408919,
    "updatedAt": 1793543408919
  },
  {
    "id": "tx_seed_175",
    "type": "expense",
    "amount": 3900,
    "date": "2026-09-08",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408920,
    "updatedAt": 1793543408920
  },
  {
    "id": "tx_seed_176",
    "type": "expense",
    "amount": 4300,
    "date": "2026-09-08",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408921,
    "updatedAt": 1793543408921
  },
  {
    "id": "tx_seed_177",
    "type": "expense",
    "amount": 4700,
    "date": "2026-09-08",
    "categoryId": "cat_uber",
    "createdAt": 1793543408922,
    "updatedAt": 1793543408922
  },
  {
    "id": "tx_seed_178",
    "type": "expense",
    "amount": 4100,
    "date": "2026-09-08",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408923,
    "updatedAt": 1793543408923
  },
  {
    "id": "tx_seed_179",
    "type": "expense",
    "amount": 5700,
    "date": "2026-09-08",
    "categoryId": "cat_uber",
    "createdAt": 1793543408924,
    "updatedAt": 1793543408924
  },
  {
    "id": "tx_seed_180",
    "type": "expense",
    "amount": 12800,
    "date": "2026-09-06",
    "categoryId": "cat_livros",
    "createdAt": 1793543408925,
    "updatedAt": 1793543408925
  },
  {
    "id": "tx_seed_181",
    "type": "expense",
    "amount": 9000,
    "date": "2026-09-06",
    "categoryId": "cat_alimentos",
    "note": "vinho",
    "createdAt": 1793543408926,
    "updatedAt": 1793543408926
  },
  {
    "id": "tx_seed_182",
    "type": "expense",
    "amount": 8500,
    "date": "2026-09-05",
    "categoryId": "cat_livros",
    "createdAt": 1793543408927,
    "updatedAt": 1793543408927
  },
  {
    "id": "tx_seed_183",
    "type": "expense",
    "amount": 6700,
    "date": "2026-09-05",
    "categoryId": "cat_educa__o",
    "note": "Dostoiévski",
    "createdAt": 1793543408928,
    "updatedAt": 1793543408928
  },
  {
    "id": "tx_seed_184",
    "type": "expense",
    "amount": 10000,
    "date": "2026-09-05",
    "categoryId": "cat_transporte",
    "createdAt": 1793543408929,
    "updatedAt": 1793543408929
  },
  {
    "id": "tx_seed_185",
    "type": "expense",
    "amount": 3900,
    "date": "2026-09-04",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408930,
    "updatedAt": 1793543408930
  },
  {
    "id": "tx_seed_186",
    "type": "expense",
    "amount": 36000,
    "date": "2026-09-04",
    "categoryId": "cat_nova_acr_pole",
    "createdAt": 1793543408931,
    "updatedAt": 1793543408931
  },
  {
    "id": "tx_seed_187",
    "type": "expense",
    "amount": 10700,
    "date": "2026-09-04",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408932,
    "updatedAt": 1793543408932
  },
  {
    "id": "tx_seed_188",
    "type": "expense",
    "amount": 2900,
    "date": "2026-09-04",
    "categoryId": "cat_uber",
    "createdAt": 1793543408933,
    "updatedAt": 1793543408933
  },
  {
    "id": "tx_seed_189",
    "type": "expense",
    "amount": 100000,
    "date": "2026-09-04",
    "categoryId": "cat_taxas",
    "createdAt": 1793543408934,
    "updatedAt": 1793543408934
  },
  {
    "id": "tx_seed_190",
    "type": "expense",
    "amount": 4200,
    "date": "2026-09-04",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408935,
    "updatedAt": 1793543408935
  },
  {
    "id": "tx_seed_191",
    "type": "expense",
    "amount": 3000,
    "date": "2026-09-04",
    "categoryId": "cat_livros",
    "note": "Kindle chess books",
    "createdAt": 1793543408936,
    "updatedAt": 1793543408936
  },
  {
    "id": "tx_seed_192",
    "type": "expense",
    "amount": 40000,
    "date": "2026-09-04",
    "categoryId": "cat_entretenimento",
    "note": "Jaraguá",
    "createdAt": 1793543408937,
    "updatedAt": 1793543408937
  },
  {
    "id": "tx_seed_193",
    "type": "expense",
    "amount": 23600,
    "date": "2026-09-04",
    "categoryId": "cat_hardware",
    "note": "mesa digitalizadora",
    "createdAt": 1793543408938,
    "updatedAt": 1793543408938
  },
  {
    "id": "tx_seed_194",
    "type": "expense",
    "amount": 36700,
    "date": "2026-09-04",
    "categoryId": "cat_servi_os",
    "note": "CEMIG",
    "createdAt": 1793543408939,
    "updatedAt": 1793543408939
  },
  {
    "id": "tx_seed_195",
    "type": "expense",
    "amount": 21600,
    "date": "2026-09-04",
    "categoryId": "cat_servi_os",
    "note": "CEMIG",
    "createdAt": 1793543408940,
    "updatedAt": 1793543408940
  },
  {
    "id": "tx_seed_196",
    "type": "expense",
    "amount": 7300,
    "date": "2026-09-04",
    "categoryId": "cat_servi_os",
    "note": "box100",
    "createdAt": 1793543408941,
    "updatedAt": 1793543408941
  },
  {
    "id": "tx_seed_197",
    "type": "expense",
    "amount": 367600,
    "date": "2026-09-04",
    "categoryId": "cat_aluguel",
    "createdAt": 1793543408942,
    "updatedAt": 1793543408942
  },
  {
    "id": "tx_seed_198",
    "type": "expense",
    "amount": 49700,
    "date": "2026-09-04",
    "categoryId": "cat_aluguel",
    "note": "condomínio",
    "createdAt": 1793543408943,
    "updatedAt": 1793543408943
  },
  {
    "id": "tx_seed_199",
    "type": "expense",
    "amount": 28500,
    "date": "2026-09-04",
    "categoryId": "cat_nova_acr_pole",
    "createdAt": 1793543408944,
    "updatedAt": 1793543408944
  },
  {
    "id": "tx_seed_200",
    "type": "expense",
    "amount": 7600,
    "date": "2026-09-04",
    "categoryId": "cat_servi_os",
    "note": "vivo",
    "createdAt": 1793543408945,
    "updatedAt": 1793543408945
  },
  {
    "id": "tx_seed_201",
    "type": "income",
    "amount": 2477500,
    "date": "2026-09-04",
    "categoryId": "cat_sal_rio",
    "createdAt": 1793543408946,
    "updatedAt": 1793543408946
  },
  {
    "id": "tx_seed_202",
    "type": "expense",
    "amount": 4300,
    "date": "2026-09-03",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408947,
    "updatedAt": 1793543408947
  },
  {
    "id": "tx_seed_203",
    "type": "expense",
    "amount": 3600,
    "date": "2026-09-03",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408948,
    "updatedAt": 1793543408948
  },
  {
    "id": "tx_seed_204",
    "type": "expense",
    "amount": 14800,
    "date": "2026-09-03",
    "categoryId": "cat_sa_de",
    "note": "academia",
    "createdAt": 1793543408949,
    "updatedAt": 1793543408949
  },
  {
    "id": "tx_seed_205",
    "type": "expense",
    "amount": 6100,
    "date": "2026-09-02",
    "categoryId": "cat_educa__o",
    "createdAt": 1793543408950,
    "updatedAt": 1793543408950
  },
  {
    "id": "tx_seed_206",
    "type": "expense",
    "amount": 3600,
    "date": "2026-09-02",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408951,
    "updatedAt": 1793543408951
  },
  {
    "id": "tx_seed_207",
    "type": "expense",
    "amount": 3700,
    "date": "2026-09-02",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408952,
    "updatedAt": 1793543408952
  },
  {
    "id": "tx_seed_208",
    "type": "expense",
    "amount": 3700,
    "date": "2026-09-01",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408953,
    "updatedAt": 1793543408953
  },
  {
    "id": "tx_seed_209",
    "type": "expense",
    "amount": 4800,
    "date": "2026-09-01",
    "categoryId": "cat_comida",
    "createdAt": 1793543408954,
    "updatedAt": 1793543408954
  },
  {
    "id": "tx_seed_210",
    "type": "expense",
    "amount": 24100,
    "date": "2026-09-01",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408955,
    "updatedAt": 1793543408955
  },
  {
    "id": "tx_seed_211",
    "type": "expense",
    "amount": 18800,
    "date": "2026-08-30",
    "categoryId": "cat_carro",
    "createdAt": 1793543408956,
    "updatedAt": 1793543408956
  },
  {
    "id": "tx_seed_212",
    "type": "expense",
    "amount": 4500,
    "date": "2026-08-28",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408957,
    "updatedAt": 1793543408957
  },
  {
    "id": "tx_seed_213",
    "type": "expense",
    "amount": 4100,
    "date": "2026-08-27",
    "categoryId": "cat_uber",
    "createdAt": 1793543408958,
    "updatedAt": 1793543408958
  },
  {
    "id": "tx_seed_214",
    "type": "expense",
    "amount": 5700,
    "date": "2026-08-27",
    "categoryId": "cat_uber",
    "createdAt": 1793543408959,
    "updatedAt": 1793543408959
  },
  {
    "id": "tx_seed_215",
    "type": "expense",
    "amount": 4200,
    "date": "2026-08-27",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408960,
    "updatedAt": 1793543408960
  },
  {
    "id": "tx_seed_216",
    "type": "expense",
    "amount": 4800,
    "date": "2026-08-27",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408961,
    "updatedAt": 1793543408961
  },
  {
    "id": "tx_seed_217",
    "type": "expense",
    "amount": 2800,
    "date": "2026-08-27",
    "categoryId": "cat_livros",
    "createdAt": 1793543408962,
    "updatedAt": 1793543408962
  },
  {
    "id": "tx_seed_218",
    "type": "expense",
    "amount": 3500,
    "date": "2026-08-26",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408963,
    "updatedAt": 1793543408963
  },
  {
    "id": "tx_seed_219",
    "type": "expense",
    "amount": 3500,
    "date": "2026-08-26",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408964,
    "updatedAt": 1793543408964
  },
  {
    "id": "tx_seed_220",
    "type": "expense",
    "amount": 19400,
    "date": "2026-08-25",
    "categoryId": "cat_carro",
    "createdAt": 1793543408965,
    "updatedAt": 1793543408965
  },
  {
    "id": "tx_seed_221",
    "type": "expense",
    "amount": 12000,
    "date": "2026-08-25",
    "categoryId": "cat_servi_os",
    "note": "Google",
    "createdAt": 1793543408966,
    "updatedAt": 1793543408966
  },
  {
    "id": "tx_seed_222",
    "type": "expense",
    "amount": 5700,
    "date": "2026-08-25",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408967,
    "updatedAt": 1793543408967
  },
  {
    "id": "tx_seed_223",
    "type": "expense",
    "amount": 4400,
    "date": "2026-08-24",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408968,
    "updatedAt": 1793543408968
  },
  {
    "id": "tx_seed_224",
    "type": "expense",
    "amount": 4500,
    "date": "2026-08-24",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408969,
    "updatedAt": 1793543408969
  },
  {
    "id": "tx_seed_225",
    "type": "expense",
    "amount": 2000,
    "date": "2026-08-22",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408970,
    "updatedAt": 1793543408970
  },
  {
    "id": "tx_seed_226",
    "type": "expense",
    "amount": 15800,
    "date": "2026-08-22",
    "categoryId": "cat_carro",
    "createdAt": 1793543408971,
    "updatedAt": 1793543408971
  },
  {
    "id": "tx_seed_227",
    "type": "expense",
    "amount": 5100,
    "date": "2026-08-21",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408972,
    "updatedAt": 1793543408972
  },
  {
    "id": "tx_seed_228",
    "type": "expense",
    "amount": 4600,
    "date": "2026-08-21",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408973,
    "updatedAt": 1793543408973
  },
  {
    "id": "tx_seed_229",
    "type": "expense",
    "amount": 28000,
    "date": "2026-08-21",
    "categoryId": "cat_alimentos",
    "note": "lowcarb",
    "createdAt": 1793543408974,
    "updatedAt": 1793543408974
  },
  {
    "id": "tx_seed_230",
    "type": "expense",
    "amount": 3800,
    "date": "2026-08-20",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408975,
    "updatedAt": 1793543408975
  },
  {
    "id": "tx_seed_231",
    "type": "expense",
    "amount": 4900,
    "date": "2026-08-20",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408976,
    "updatedAt": 1793543408976
  },
  {
    "id": "tx_seed_232",
    "type": "expense",
    "amount": 4500,
    "date": "2026-08-20",
    "categoryId": "cat_casa",
    "note": "virol",
    "createdAt": 1793543408977,
    "updatedAt": 1793543408977
  },
  {
    "id": "tx_seed_233",
    "type": "expense",
    "amount": 4600,
    "date": "2026-08-19",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408978,
    "updatedAt": 1793543408978
  },
  {
    "id": "tx_seed_234",
    "type": "expense",
    "amount": 4100,
    "date": "2026-08-19",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408979,
    "updatedAt": 1793543408979
  },
  {
    "id": "tx_seed_235",
    "type": "expense",
    "amount": 4800,
    "date": "2026-08-18",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408980,
    "updatedAt": 1793543408980
  },
  {
    "id": "tx_seed_236",
    "type": "expense",
    "amount": 4400,
    "date": "2026-08-18",
    "categoryId": "cat_comida",
    "createdAt": 1793543408981,
    "updatedAt": 1793543408981
  },
  {
    "id": "tx_seed_237",
    "type": "expense",
    "amount": 4400,
    "date": "2026-08-17",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408982,
    "updatedAt": 1793543408982
  },
  {
    "id": "tx_seed_238",
    "type": "expense",
    "amount": 4100,
    "date": "2026-08-17",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408983,
    "updatedAt": 1793543408983
  },
  {
    "id": "tx_seed_239",
    "type": "expense",
    "amount": 4400,
    "date": "2026-08-17",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408984,
    "updatedAt": 1793543408984
  },
  {
    "id": "tx_seed_240",
    "type": "expense",
    "amount": 6000,
    "date": "2026-08-17",
    "categoryId": "cat_nova_acr_pole",
    "note": "mam",
    "createdAt": 1793543408985,
    "updatedAt": 1793543408985
  },
  {
    "id": "tx_seed_241",
    "type": "expense",
    "amount": 3000,
    "date": "2026-08-17",
    "categoryId": "cat_servi_os",
    "note": "Opencode go",
    "createdAt": 1793543408986,
    "updatedAt": 1793543408986
  },
  {
    "id": "tx_seed_242",
    "type": "expense",
    "amount": 6700,
    "date": "2026-08-16",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408987,
    "updatedAt": 1793543408987
  },
  {
    "id": "tx_seed_243",
    "type": "expense",
    "amount": 15800,
    "date": "2026-08-16",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408988,
    "updatedAt": 1793543408988
  },
  {
    "id": "tx_seed_244",
    "type": "expense",
    "amount": 3900,
    "date": "2026-08-15",
    "categoryId": "cat_educa__o",
    "createdAt": 1793543408989,
    "updatedAt": 1793543408989
  },
  {
    "id": "tx_seed_245",
    "type": "expense",
    "amount": 8500,
    "date": "2026-08-15",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543408990,
    "updatedAt": 1793543408990
  },
  {
    "id": "tx_seed_246",
    "type": "expense",
    "amount": 7400,
    "date": "2026-08-15",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408991,
    "updatedAt": 1793543408991
  },
  {
    "id": "tx_seed_247",
    "type": "expense",
    "amount": 18000,
    "date": "2026-08-15",
    "categoryId": "cat_carro",
    "createdAt": 1793543408992,
    "updatedAt": 1793543408992
  },
  {
    "id": "tx_seed_248",
    "type": "expense",
    "amount": 4900,
    "date": "2026-08-14",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408993,
    "updatedAt": 1793543408993
  },
  {
    "id": "tx_seed_249",
    "type": "expense",
    "amount": 4500,
    "date": "2026-08-14",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408994,
    "updatedAt": 1793543408994
  },
  {
    "id": "tx_seed_250",
    "type": "expense",
    "amount": 5200,
    "date": "2026-08-13",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408995,
    "updatedAt": 1793543408995
  },
  {
    "id": "tx_seed_251",
    "type": "expense",
    "amount": 4700,
    "date": "2026-08-13",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408996,
    "updatedAt": 1793543408996
  },
  {
    "id": "tx_seed_252",
    "type": "expense",
    "amount": 6000,
    "date": "2026-08-13",
    "categoryId": "cat_servi_os",
    "note": "Gemini",
    "createdAt": 1793543408997,
    "updatedAt": 1793543408997
  },
  {
    "id": "tx_seed_253",
    "type": "expense",
    "amount": 4800,
    "date": "2026-08-12",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543408998,
    "updatedAt": 1793543408998
  },
  {
    "id": "tx_seed_254",
    "type": "expense",
    "amount": 4400,
    "date": "2026-08-12",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543408999,
    "updatedAt": 1793543408999
  },
  {
    "id": "tx_seed_255",
    "type": "expense",
    "amount": 7100,
    "date": "2026-08-12",
    "categoryId": "cat_alimentos",
    "note": "supermercado",
    "createdAt": 1793543409000,
    "updatedAt": 1793543409000
  },
  {
    "id": "tx_seed_256",
    "type": "expense",
    "amount": 4200,
    "date": "2026-08-11",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409001,
    "updatedAt": 1793543409001
  },
  {
    "id": "tx_seed_257",
    "type": "expense",
    "amount": 3600,
    "date": "2026-08-11",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409002,
    "updatedAt": 1793543409002
  },
  {
    "id": "tx_seed_258",
    "type": "expense",
    "amount": 10700,
    "date": "2026-08-10",
    "categoryId": "cat_sa_de",
    "note": "remédios",
    "createdAt": 1793543409003,
    "updatedAt": 1793543409003
  },
  {
    "id": "tx_seed_259",
    "type": "expense",
    "amount": 2900,
    "date": "2026-08-10",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409004,
    "updatedAt": 1793543409004
  },
  {
    "id": "tx_seed_260",
    "type": "expense",
    "amount": 3700,
    "date": "2026-08-10",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409005,
    "updatedAt": 1793543409005
  },
  {
    "id": "tx_seed_261",
    "type": "expense",
    "amount": 245900,
    "date": "2026-08-10",
    "categoryId": "cat_carro",
    "createdAt": 1793543409006,
    "updatedAt": 1793543409006
  },
  {
    "id": "tx_seed_262",
    "type": "expense",
    "amount": 17400,
    "date": "2026-08-10",
    "categoryId": "cat_carro",
    "createdAt": 1793543409007,
    "updatedAt": 1793543409007
  },
  {
    "id": "tx_seed_263",
    "type": "expense",
    "amount": 7800,
    "date": "2026-08-09",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409008,
    "updatedAt": 1793543409008
  },
  {
    "id": "tx_seed_264",
    "type": "expense",
    "amount": 7600,
    "date": "2026-08-08",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409009,
    "updatedAt": 1793543409009
  },
  {
    "id": "tx_seed_265",
    "type": "expense",
    "amount": 8000,
    "date": "2026-08-08",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409010,
    "updatedAt": 1793543409010
  },
  {
    "id": "tx_seed_266",
    "type": "expense",
    "amount": 19500,
    "date": "2026-08-08",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409011,
    "updatedAt": 1793543409011
  },
  {
    "id": "tx_seed_267",
    "type": "expense",
    "amount": 7100,
    "date": "2026-08-07",
    "categoryId": "cat_uber",
    "createdAt": 1793543409012,
    "updatedAt": 1793543409012
  },
  {
    "id": "tx_seed_268",
    "type": "expense",
    "amount": 4500,
    "date": "2026-08-07",
    "categoryId": "cat_uber",
    "createdAt": 1793543409013,
    "updatedAt": 1793543409013
  },
  {
    "id": "tx_seed_269",
    "type": "expense",
    "amount": 4300,
    "date": "2026-08-07",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409014,
    "updatedAt": 1793543409014
  },
  {
    "id": "tx_seed_270",
    "type": "expense",
    "amount": 5000,
    "date": "2026-08-07",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409015,
    "updatedAt": 1793543409015
  },
  {
    "id": "tx_seed_271",
    "type": "expense",
    "amount": 7000,
    "date": "2026-08-07",
    "categoryId": "cat_servi_os",
    "note": "Claro",
    "createdAt": 1793543409016,
    "updatedAt": 1793543409016
  },
  {
    "id": "tx_seed_272",
    "type": "expense",
    "amount": 12900,
    "date": "2026-08-07",
    "categoryId": "cat_servi_os",
    "note": "vivo",
    "createdAt": 1793543409017,
    "updatedAt": 1793543409017
  },
  {
    "id": "tx_seed_273",
    "type": "expense",
    "amount": 28500,
    "date": "2026-08-07",
    "categoryId": "cat_nova_acr_pole",
    "createdAt": 1793543409018,
    "updatedAt": 1793543409018
  },
  {
    "id": "tx_seed_274",
    "type": "expense",
    "amount": 50400,
    "date": "2026-08-07",
    "categoryId": "cat_aluguel",
    "createdAt": 1793543409019,
    "updatedAt": 1793543409019
  },
  {
    "id": "tx_seed_275",
    "type": "expense",
    "amount": 7300,
    "date": "2026-08-07",
    "categoryId": "cat_servi_os",
    "note": "box100",
    "createdAt": 1793543409020,
    "updatedAt": 1793543409020
  },
  {
    "id": "tx_seed_276",
    "type": "expense",
    "amount": 367600,
    "date": "2026-08-07",
    "categoryId": "cat_aluguel",
    "createdAt": 1793543409021,
    "updatedAt": 1793543409021
  },
  {
    "id": "tx_seed_277",
    "type": "expense",
    "amount": 330000,
    "date": "2026-08-07",
    "categoryId": "cat_servi_os",
    "note": "faxineira",
    "createdAt": 1793543409022,
    "updatedAt": 1793543409022
  },
  {
    "id": "tx_seed_278",
    "type": "expense",
    "amount": 156300,
    "date": "2026-08-07",
    "categoryId": "cat_sa_de",
    "note": "plano de saúde",
    "createdAt": 1793543409023,
    "updatedAt": 1793543409023
  },
  {
    "id": "tx_seed_279",
    "type": "income",
    "amount": 2518600,
    "date": "2026-08-07",
    "categoryId": "cat_sal_rio",
    "createdAt": 1793543409024,
    "updatedAt": 1793543409024
  },
  {
    "id": "tx_seed_280",
    "type": "expense",
    "amount": 4300,
    "date": "2026-08-06",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409025,
    "updatedAt": 1793543409025
  },
  {
    "id": "tx_seed_281",
    "type": "expense",
    "amount": 3900,
    "date": "2026-08-06",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409026,
    "updatedAt": 1793543409026
  },
  {
    "id": "tx_seed_282",
    "type": "expense",
    "amount": 4200,
    "date": "2026-08-05",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409027,
    "updatedAt": 1793543409027
  },
  {
    "id": "tx_seed_283",
    "type": "expense",
    "amount": 3700,
    "date": "2026-08-05",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409028,
    "updatedAt": 1793543409028
  },
  {
    "id": "tx_seed_284",
    "type": "expense",
    "amount": 26900,
    "date": "2026-08-05",
    "categoryId": "cat_livros",
    "createdAt": 1793543409029,
    "updatedAt": 1793543409029
  },
  {
    "id": "tx_seed_285",
    "type": "expense",
    "amount": 4500,
    "date": "2026-08-04",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409030,
    "updatedAt": 1793543409030
  },
  {
    "id": "tx_seed_286",
    "type": "expense",
    "amount": 4200,
    "date": "2026-08-04",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409031,
    "updatedAt": 1793543409031
  },
  {
    "id": "tx_seed_287",
    "type": "expense",
    "amount": 3800,
    "date": "2026-08-04",
    "categoryId": "cat_alimentos",
    "note": "café camg",
    "createdAt": 1793543409032,
    "updatedAt": 1793543409032
  },
  {
    "id": "tx_seed_288",
    "type": "expense",
    "amount": 12000,
    "date": "2026-08-03",
    "categoryId": "cat_carro",
    "createdAt": 1793543409033,
    "updatedAt": 1793543409033
  },
  {
    "id": "tx_seed_289",
    "type": "expense",
    "amount": 4300,
    "date": "2026-08-03",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409035,
    "updatedAt": 1793543409035
  },
  {
    "id": "tx_seed_290",
    "type": "expense",
    "amount": 3900,
    "date": "2026-08-03",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409036,
    "updatedAt": 1793543409036
  },
  {
    "id": "tx_seed_291",
    "type": "expense",
    "amount": 4400,
    "date": "2026-08-03",
    "categoryId": "cat_alimentos",
    "note": "chicletes",
    "createdAt": 1793543409037,
    "updatedAt": 1793543409037
  },
  {
    "id": "tx_seed_292",
    "type": "expense",
    "amount": 9000,
    "date": "2026-08-01",
    "categoryId": "cat_doa__o",
    "createdAt": 1793543409038,
    "updatedAt": 1793543409038
  },
  {
    "id": "tx_seed_293",
    "type": "expense",
    "amount": 4800,
    "date": "2026-08-01",
    "categoryId": "cat_alimentos",
    "note": "cacau e pimenta",
    "createdAt": 1793543409039,
    "updatedAt": 1793543409039
  },
  {
    "id": "tx_seed_294",
    "type": "expense",
    "amount": 5300,
    "date": "2026-08-01",
    "categoryId": "cat_alimentos",
    "note": "queijo",
    "createdAt": 1793543409040,
    "updatedAt": 1793543409040
  },
  {
    "id": "tx_seed_295",
    "type": "expense",
    "amount": 2500,
    "date": "2026-07-31",
    "categoryId": "cat_uber",
    "createdAt": 1793543409041,
    "updatedAt": 1793543409041
  },
  {
    "id": "tx_seed_296",
    "type": "expense",
    "amount": 24100,
    "date": "2026-07-31",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409042,
    "updatedAt": 1793543409042
  },
  {
    "id": "tx_seed_297",
    "type": "expense",
    "amount": 3000,
    "date": "2026-07-31",
    "categoryId": "cat_uber",
    "createdAt": 1793543409043,
    "updatedAt": 1793543409043
  },
  {
    "id": "tx_seed_298",
    "type": "expense",
    "amount": 3300,
    "date": "2026-07-31",
    "categoryId": "cat_uber",
    "createdAt": 1793543409044,
    "updatedAt": 1793543409044
  },
  {
    "id": "tx_seed_299",
    "type": "expense",
    "amount": 4000,
    "date": "2026-07-31",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409045,
    "updatedAt": 1793543409045
  },
  {
    "id": "tx_seed_300",
    "type": "expense",
    "amount": 3200,
    "date": "2026-07-31",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409046,
    "updatedAt": 1793543409046
  },
  {
    "id": "tx_seed_301",
    "type": "expense",
    "amount": 5000,
    "date": "2026-07-31",
    "categoryId": "cat_doa__o",
    "createdAt": 1793543409047,
    "updatedAt": 1793543409047
  },
  {
    "id": "tx_seed_302",
    "type": "expense",
    "amount": 8000,
    "date": "2026-07-30",
    "categoryId": "cat_alimentos",
    "note": "água com gás",
    "createdAt": 1793543409048,
    "updatedAt": 1793543409048
  },
  {
    "id": "tx_seed_303",
    "type": "expense",
    "amount": 4500,
    "date": "2026-07-29",
    "categoryId": "cat_alimentos",
    "note": "xilitol",
    "createdAt": 1793543409049,
    "updatedAt": 1793543409049
  },
  {
    "id": "tx_seed_304",
    "type": "expense",
    "amount": 16500,
    "date": "2026-07-29",
    "categoryId": "cat_alimentos",
    "note": "whey",
    "createdAt": 1793543409050,
    "updatedAt": 1793543409050
  },
  {
    "id": "tx_seed_305",
    "type": "expense",
    "amount": 4200,
    "date": "2026-07-29",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409051,
    "updatedAt": 1793543409051
  },
  {
    "id": "tx_seed_306",
    "type": "expense",
    "amount": 3900,
    "date": "2026-07-29",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409052,
    "updatedAt": 1793543409052
  },
  {
    "id": "tx_seed_307",
    "type": "expense",
    "amount": 6300,
    "date": "2026-07-28",
    "categoryId": "cat_nova_acr_pole",
    "createdAt": 1793543409053,
    "updatedAt": 1793543409053
  },
  {
    "id": "tx_seed_308",
    "type": "expense",
    "amount": 12000,
    "date": "2026-07-28",
    "categoryId": "cat_roupa",
    "note": "pijamas",
    "createdAt": 1793543409054,
    "updatedAt": 1793543409054
  },
  {
    "id": "tx_seed_309",
    "type": "expense",
    "amount": 3700,
    "date": "2026-07-28",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409055,
    "updatedAt": 1793543409055
  },
  {
    "id": "tx_seed_310",
    "type": "expense",
    "amount": 4000,
    "date": "2026-07-28",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409056,
    "updatedAt": 1793543409056
  },
  {
    "id": "tx_seed_311",
    "type": "expense",
    "amount": 4200,
    "date": "2026-07-27",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409057,
    "updatedAt": 1793543409057
  },
  {
    "id": "tx_seed_312",
    "type": "expense",
    "amount": 4300,
    "date": "2026-07-27",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409058,
    "updatedAt": 1793543409058
  },
  {
    "id": "tx_seed_313",
    "type": "expense",
    "amount": 2900,
    "date": "2026-07-27",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409059,
    "updatedAt": 1793543409059
  },
  {
    "id": "tx_seed_314",
    "type": "expense",
    "amount": 2800,
    "date": "2026-07-26",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409060,
    "updatedAt": 1793543409060
  },
  {
    "id": "tx_seed_315",
    "type": "expense",
    "amount": 17000,
    "date": "2026-07-26",
    "categoryId": "cat_carro",
    "createdAt": 1793543409061,
    "updatedAt": 1793543409061
  },
  {
    "id": "tx_seed_316",
    "type": "expense",
    "amount": 2500,
    "date": "2026-07-25",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409062,
    "updatedAt": 1793543409062
  },
  {
    "id": "tx_seed_317",
    "type": "expense",
    "amount": 4000,
    "date": "2026-07-24",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409063,
    "updatedAt": 1793543409063
  },
  {
    "id": "tx_seed_318",
    "type": "expense",
    "amount": 5000,
    "date": "2026-07-24",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409064,
    "updatedAt": 1793543409064
  },
  {
    "id": "tx_seed_319",
    "type": "expense",
    "amount": 11600,
    "date": "2026-07-24",
    "categoryId": "cat_alimentos",
    "note": "supermercado",
    "createdAt": 1793543409065,
    "updatedAt": 1793543409065
  },
  {
    "id": "tx_seed_320",
    "type": "expense",
    "amount": 20100,
    "date": "2026-07-24",
    "categoryId": "cat_alimentos",
    "note": "lowcarb",
    "createdAt": 1793543409066,
    "updatedAt": 1793543409066
  },
  {
    "id": "tx_seed_321",
    "type": "expense",
    "amount": 4400,
    "date": "2026-07-23",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409067,
    "updatedAt": 1793543409067
  },
  {
    "id": "tx_seed_322",
    "type": "expense",
    "amount": 4600,
    "date": "2026-07-23",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409068,
    "updatedAt": 1793543409068
  },
  {
    "id": "tx_seed_323",
    "type": "expense",
    "amount": 3000,
    "date": "2026-07-23",
    "categoryId": "cat_livros",
    "createdAt": 1793543409069,
    "updatedAt": 1793543409069
  },
  {
    "id": "tx_seed_324",
    "type": "expense",
    "amount": 15000,
    "date": "2026-07-23",
    "categoryId": "cat_educa__o",
    "note": "tech leads club",
    "createdAt": 1793543409070,
    "updatedAt": 1793543409070
  },
  {
    "id": "tx_seed_325",
    "type": "expense",
    "amount": 3200,
    "date": "2026-07-22",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409071,
    "updatedAt": 1793543409071
  },
  {
    "id": "tx_seed_326",
    "type": "expense",
    "amount": 2400,
    "date": "2026-07-22",
    "categoryId": "cat_internet",
    "note": "Spotify",
    "createdAt": 1793543409072,
    "updatedAt": 1793543409072
  },
  {
    "id": "tx_seed_327",
    "type": "expense",
    "amount": 3500,
    "date": "2026-07-22",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409073,
    "updatedAt": 1793543409073
  },
  {
    "id": "tx_seed_328",
    "type": "expense",
    "amount": 40000,
    "date": "2026-07-22",
    "categoryId": "cat_entretenimento",
    "note": "Jaraguá",
    "createdAt": 1793543409074,
    "updatedAt": 1793543409074
  },
  {
    "id": "tx_seed_329",
    "type": "expense",
    "amount": 87500,
    "date": "2026-07-21",
    "categoryId": "cat_roupa",
    "note": "Windsor",
    "createdAt": 1793543409075,
    "updatedAt": 1793543409075
  },
  {
    "id": "tx_seed_330",
    "type": "expense",
    "amount": 4000,
    "date": "2026-07-21",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409076,
    "updatedAt": 1793543409076
  },
  {
    "id": "tx_seed_331",
    "type": "expense",
    "amount": 3400,
    "date": "2026-07-21",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409077,
    "updatedAt": 1793543409077
  },
  {
    "id": "tx_seed_332",
    "type": "expense",
    "amount": 4200,
    "date": "2026-07-21",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409078,
    "updatedAt": 1793543409078
  },
  {
    "id": "tx_seed_333",
    "type": "expense",
    "amount": 17000,
    "date": "2026-07-21",
    "categoryId": "cat_carro",
    "createdAt": 1793543409079,
    "updatedAt": 1793543409079
  },
  {
    "id": "tx_seed_334",
    "type": "expense",
    "amount": 5800,
    "date": "2026-07-20",
    "categoryId": "cat_alimentos",
    "note": "chiclete",
    "createdAt": 1793543409080,
    "updatedAt": 1793543409080
  },
  {
    "id": "tx_seed_335",
    "type": "expense",
    "amount": 4200,
    "date": "2026-07-20",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409081,
    "updatedAt": 1793543409081
  },
  {
    "id": "tx_seed_336",
    "type": "expense",
    "amount": 3800,
    "date": "2026-07-20",
    "categoryId": "cat_comida",
    "note": "Café da manhã",
    "createdAt": 1793543409082,
    "updatedAt": 1793543409082
  },
  {
    "id": "tx_seed_337",
    "type": "expense",
    "amount": 24000,
    "date": "2026-07-20",
    "categoryId": "cat_nova_acr_pole",
    "note": "msj",
    "createdAt": 1793543409083,
    "updatedAt": 1793543409083
  },
  {
    "id": "tx_seed_338",
    "type": "expense",
    "amount": 1400,
    "date": "2026-07-20",
    "categoryId": "cat_comida",
    "note": "Café da manhã",
    "createdAt": 1793543409084,
    "updatedAt": 1793543409084
  },
  {
    "id": "tx_seed_339",
    "type": "expense",
    "amount": 7800,
    "date": "2026-07-19",
    "categoryId": "cat_alimentos",
    "note": "supermercado",
    "createdAt": 1793543409085,
    "updatedAt": 1793543409085
  },
  {
    "id": "tx_seed_340",
    "type": "expense",
    "amount": 2000,
    "date": "2026-07-19",
    "categoryId": "cat_uber",
    "createdAt": 1793543409086,
    "updatedAt": 1793543409086
  },
  {
    "id": "tx_seed_341",
    "type": "expense",
    "amount": 4900,
    "date": "2026-07-19",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409087,
    "updatedAt": 1793543409087
  },
  {
    "id": "tx_seed_342",
    "type": "expense",
    "amount": 3400,
    "date": "2026-07-18",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409088,
    "updatedAt": 1793543409088
  },
  {
    "id": "tx_seed_343",
    "type": "expense",
    "amount": 3500,
    "date": "2026-07-18",
    "categoryId": "cat_comida",
    "note": "Café da manhã",
    "createdAt": 1793543409089,
    "updatedAt": 1793543409089
  },
  {
    "id": "tx_seed_344",
    "type": "expense",
    "amount": 8400,
    "date": "2026-07-17",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409090,
    "updatedAt": 1793543409090
  },
  {
    "id": "tx_seed_345",
    "type": "expense",
    "amount": 20000,
    "date": "2026-07-17",
    "categoryId": "cat_transporte",
    "note": "carro msj",
    "createdAt": 1793543409091,
    "updatedAt": 1793543409091
  },
  {
    "id": "tx_seed_346",
    "type": "expense",
    "amount": 3600,
    "date": "2026-07-17",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409092,
    "updatedAt": 1793543409092
  },
  {
    "id": "tx_seed_347",
    "type": "expense",
    "amount": 800,
    "date": "2026-07-17",
    "categoryId": "cat_uber",
    "createdAt": 1793543409093,
    "updatedAt": 1793543409093
  },
  {
    "id": "tx_seed_348",
    "type": "expense",
    "amount": 4700,
    "date": "2026-07-17",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409094,
    "updatedAt": 1793543409094
  },
  {
    "id": "tx_seed_349",
    "type": "expense",
    "amount": 4000,
    "date": "2026-07-16",
    "categoryId": "cat_alimentos",
    "note": "bolo SEF",
    "createdAt": 1793543409095,
    "updatedAt": 1793543409095
  },
  {
    "id": "tx_seed_350",
    "type": "expense",
    "amount": 5000,
    "date": "2026-07-15",
    "categoryId": "cat_alimentos",
    "note": "pizzaria",
    "createdAt": 1793543409096,
    "updatedAt": 1793543409096
  },
  {
    "id": "tx_seed_351",
    "type": "expense",
    "amount": 4700,
    "date": "2026-07-14",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409097,
    "updatedAt": 1793543409097
  },
  {
    "id": "tx_seed_352",
    "type": "expense",
    "amount": 4600,
    "date": "2026-07-14",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409098,
    "updatedAt": 1793543409098
  },
  {
    "id": "tx_seed_353",
    "type": "expense",
    "amount": 40300,
    "date": "2026-07-14",
    "categoryId": "cat_casa",
    "note": "travesseiros",
    "createdAt": 1793543409099,
    "updatedAt": 1793543409099
  },
  {
    "id": "tx_seed_354",
    "type": "expense",
    "amount": 3400,
    "date": "2026-07-13",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409100,
    "updatedAt": 1793543409100
  },
  {
    "id": "tx_seed_355",
    "type": "expense",
    "amount": 17400,
    "date": "2026-07-13",
    "categoryId": "cat_carro",
    "createdAt": 1793543409101,
    "updatedAt": 1793543409101
  },
  {
    "id": "tx_seed_356",
    "type": "expense",
    "amount": 4000,
    "date": "2026-07-13",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409102,
    "updatedAt": 1793543409102
  },
  {
    "id": "tx_seed_357",
    "type": "expense",
    "amount": 3400,
    "date": "2026-07-12",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409103,
    "updatedAt": 1793543409103
  },
  {
    "id": "tx_seed_358",
    "type": "expense",
    "amount": 5200,
    "date": "2026-07-11",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409104,
    "updatedAt": 1793543409104
  },
  {
    "id": "tx_seed_359",
    "type": "expense",
    "amount": 3500,
    "date": "2026-07-11",
    "categoryId": "cat_alimentos",
    "note": "comida japonesa",
    "createdAt": 1793543409105,
    "updatedAt": 1793543409105
  },
  {
    "id": "tx_seed_360",
    "type": "expense",
    "amount": 7900,
    "date": "2026-07-11",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409106,
    "updatedAt": 1793543409106
  },
  {
    "id": "tx_seed_361",
    "type": "expense",
    "amount": 8000,
    "date": "2026-07-11",
    "categoryId": "cat_sa_de",
    "note": "cortar cabelo",
    "createdAt": 1793543409107,
    "updatedAt": 1793543409107
  },
  {
    "id": "tx_seed_362",
    "type": "expense",
    "amount": 3300,
    "date": "2026-07-11",
    "categoryId": "cat_alimentos",
    "note": "cacau",
    "createdAt": 1793543409108,
    "updatedAt": 1793543409108
  },
  {
    "id": "tx_seed_363",
    "type": "expense",
    "amount": 6700,
    "date": "2026-07-11",
    "categoryId": "cat_alimentos",
    "note": "supermercado",
    "createdAt": 1793543409109,
    "updatedAt": 1793543409109
  },
  {
    "id": "tx_seed_364",
    "type": "expense",
    "amount": 4700,
    "date": "2026-07-10",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409110,
    "updatedAt": 1793543409110
  },
  {
    "id": "tx_seed_365",
    "type": "expense",
    "amount": 24100,
    "date": "2026-07-10",
    "categoryId": "cat_alimentos",
    "note": "lowcarb",
    "createdAt": 1793543409111,
    "updatedAt": 1793543409111
  },
  {
    "id": "tx_seed_366",
    "type": "expense",
    "amount": 200000,
    "date": "2026-07-10",
    "categoryId": "cat_hardware",
    "note": "monitor",
    "createdAt": 1793543409112,
    "updatedAt": 1793543409112
  },
  {
    "id": "tx_seed_367",
    "type": "expense",
    "amount": 4100,
    "date": "2026-07-10",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409113,
    "updatedAt": 1793543409113
  },
  {
    "id": "tx_seed_368",
    "type": "expense",
    "amount": 3900,
    "date": "2026-07-10",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409114,
    "updatedAt": 1793543409114
  },
  {
    "id": "tx_seed_369",
    "type": "expense",
    "amount": 21300,
    "date": "2026-07-09",
    "categoryId": "cat_servi_os",
    "note": "CEMIG",
    "createdAt": 1793543409115,
    "updatedAt": 1793543409115
  },
  {
    "id": "tx_seed_370",
    "type": "expense",
    "amount": 34700,
    "date": "2026-07-09",
    "categoryId": "cat_servi_os",
    "note": "affemg",
    "createdAt": 1793543409116,
    "updatedAt": 1793543409116
  },
  {
    "id": "tx_seed_371",
    "type": "expense",
    "amount": 4800,
    "date": "2026-07-09",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409117,
    "updatedAt": 1793543409117
  },
  {
    "id": "tx_seed_372",
    "type": "expense",
    "amount": 12100,
    "date": "2026-07-09",
    "categoryId": "cat_internet",
    "createdAt": 1793543409118,
    "updatedAt": 1793543409118
  },
  {
    "id": "tx_seed_373",
    "type": "expense",
    "amount": 3700,
    "date": "2026-07-08",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409119,
    "updatedAt": 1793543409119
  },
  {
    "id": "tx_seed_374",
    "type": "expense",
    "amount": 3500,
    "date": "2026-07-08",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409120,
    "updatedAt": 1793543409120
  },
  {
    "id": "tx_seed_375",
    "type": "expense",
    "amount": 20100,
    "date": "2026-07-08",
    "categoryId": "cat_carro",
    "createdAt": 1793543409121,
    "updatedAt": 1793543409121
  },
  {
    "id": "tx_seed_376",
    "type": "expense",
    "amount": 4600,
    "date": "2026-07-07",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409122,
    "updatedAt": 1793543409122
  },
  {
    "id": "tx_seed_377",
    "type": "expense",
    "amount": 3700,
    "date": "2026-07-07",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409123,
    "updatedAt": 1793543409123
  },
  {
    "id": "tx_seed_378",
    "type": "expense",
    "amount": 4800,
    "date": "2026-07-07",
    "categoryId": "cat_nova_acr_pole",
    "createdAt": 1793543409124,
    "updatedAt": 1793543409124
  },
  {
    "id": "tx_seed_379",
    "type": "expense",
    "amount": 5800,
    "date": "2026-07-07",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409125,
    "updatedAt": 1793543409125
  },
  {
    "id": "tx_seed_380",
    "type": "expense",
    "amount": 300000,
    "date": "2026-07-07",
    "categoryId": "cat_bitcoin",
    "createdAt": 1793543409126,
    "updatedAt": 1793543409126
  },
  {
    "id": "tx_seed_381",
    "type": "expense",
    "amount": 7600,
    "date": "2026-07-07",
    "categoryId": "cat_internet",
    "note": "vivo",
    "createdAt": 1793543409127,
    "updatedAt": 1793543409127
  },
  {
    "id": "tx_seed_382",
    "type": "expense",
    "amount": 301900,
    "date": "2026-07-07",
    "categoryId": "cat_sa_de",
    "note": "plano de saúde",
    "createdAt": 1793543409128,
    "updatedAt": 1793543409128
  },
  {
    "id": "tx_seed_383",
    "type": "expense",
    "amount": 7000,
    "date": "2026-07-07",
    "categoryId": "cat_servi_os",
    "note": "box100",
    "createdAt": 1793543409129,
    "updatedAt": 1793543409129
  },
  {
    "id": "tx_seed_384",
    "type": "expense",
    "amount": 367600,
    "date": "2026-07-07",
    "categoryId": "cat_aluguel",
    "createdAt": 1793543409130,
    "updatedAt": 1793543409130
  },
  {
    "id": "tx_seed_385",
    "type": "expense",
    "amount": 50500,
    "date": "2026-07-07",
    "categoryId": "cat_aluguel",
    "note": "condomínio",
    "createdAt": 1793543409131,
    "updatedAt": 1793543409131
  },
  {
    "id": "tx_seed_386",
    "type": "expense",
    "amount": 28500,
    "date": "2026-07-07",
    "categoryId": "cat_nova_acr_pole",
    "createdAt": 1793543409132,
    "updatedAt": 1793543409132
  },
  {
    "id": "tx_seed_387",
    "type": "expense",
    "amount": 12100,
    "date": "2026-07-07",
    "categoryId": "cat_internet",
    "note": "blink",
    "createdAt": 1793543409133,
    "updatedAt": 1793543409133
  },
  {
    "id": "tx_seed_388",
    "type": "income",
    "amount": 2641200,
    "date": "2026-07-07",
    "categoryId": "cat_sal_rio",
    "createdAt": 1793543409134,
    "updatedAt": 1793543409134
  },
  {
    "id": "tx_seed_389",
    "type": "expense",
    "amount": 42100,
    "date": "2026-07-06",
    "categoryId": "cat_transporte",
    "note": "avião jornadas",
    "createdAt": 1793543409135,
    "updatedAt": 1793543409135
  },
  {
    "id": "tx_seed_390",
    "type": "expense",
    "amount": 31600,
    "date": "2026-07-06",
    "categoryId": "cat_transporte",
    "note": "translado jornadas",
    "createdAt": 1793543409136,
    "updatedAt": 1793543409136
  },
  {
    "id": "tx_seed_391",
    "type": "expense",
    "amount": 155500,
    "date": "2026-07-06",
    "categoryId": "cat_hotel",
    "note": "jornadas",
    "createdAt": 1793543409137,
    "updatedAt": 1793543409137
  },
  {
    "id": "tx_seed_392",
    "type": "expense",
    "amount": 3700,
    "date": "2026-07-06",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409138,
    "updatedAt": 1793543409138
  },
  {
    "id": "tx_seed_393",
    "type": "expense",
    "amount": 3700,
    "date": "2026-07-06",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409139,
    "updatedAt": 1793543409139
  },
  {
    "id": "tx_seed_394",
    "type": "expense",
    "amount": 7600,
    "date": "2026-07-05",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409140,
    "updatedAt": 1793543409140
  },
  {
    "id": "tx_seed_395",
    "type": "expense",
    "amount": 11900,
    "date": "2026-07-05",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409141,
    "updatedAt": 1793543409141
  },
  {
    "id": "tx_seed_396",
    "type": "expense",
    "amount": 4500,
    "date": "2026-07-04",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409142,
    "updatedAt": 1793543409142
  },
  {
    "id": "tx_seed_397",
    "type": "expense",
    "amount": 25500,
    "date": "2026-07-04",
    "categoryId": "cat_entretenimento",
    "note": "excaliburguer",
    "createdAt": 1793543409143,
    "updatedAt": 1793543409143
  },
  {
    "id": "tx_seed_398",
    "type": "expense",
    "amount": 24100,
    "date": "2026-07-03",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409144,
    "updatedAt": 1793543409144
  },
  {
    "id": "tx_seed_399",
    "type": "expense",
    "amount": 9000,
    "date": "2026-07-03",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409145,
    "updatedAt": 1793543409145
  },
  {
    "id": "tx_seed_400",
    "type": "expense",
    "amount": 4200,
    "date": "2026-07-03",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409146,
    "updatedAt": 1793543409146
  },
  {
    "id": "tx_seed_401",
    "type": "expense",
    "amount": 3800,
    "date": "2026-07-03",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409147,
    "updatedAt": 1793543409147
  },
  {
    "id": "tx_seed_402",
    "type": "expense",
    "amount": 5800,
    "date": "2026-07-03",
    "categoryId": "cat_livros",
    "createdAt": 1793543409148,
    "updatedAt": 1793543409148
  },
  {
    "id": "tx_seed_403",
    "type": "expense",
    "amount": 27600,
    "date": "2026-07-03",
    "categoryId": "cat_sa_de",
    "note": "academia",
    "createdAt": 1793543409149,
    "updatedAt": 1793543409149
  },
  {
    "id": "tx_seed_404",
    "type": "expense",
    "amount": 18000,
    "date": "2026-07-02",
    "categoryId": "cat_carro",
    "createdAt": 1793543409150,
    "updatedAt": 1793543409150
  },
  {
    "id": "tx_seed_405",
    "type": "expense",
    "amount": 4000,
    "date": "2026-07-02",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409151,
    "updatedAt": 1793543409151
  },
  {
    "id": "tx_seed_406",
    "type": "expense",
    "amount": 4400,
    "date": "2026-07-02",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409152,
    "updatedAt": 1793543409152
  },
  {
    "id": "tx_seed_407",
    "type": "expense",
    "amount": 4200,
    "date": "2026-07-02",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409153,
    "updatedAt": 1793543409153
  },
  {
    "id": "tx_seed_408",
    "type": "expense",
    "amount": 4500,
    "date": "2026-07-01",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409154,
    "updatedAt": 1793543409154
  },
  {
    "id": "tx_seed_409",
    "type": "expense",
    "amount": 3300,
    "date": "2026-07-01",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409155,
    "updatedAt": 1793543409155
  },
  {
    "id": "tx_seed_410",
    "type": "expense",
    "amount": 9800,
    "date": "2026-07-01",
    "categoryId": "cat_livros",
    "createdAt": 1793543409156,
    "updatedAt": 1793543409156
  },
  {
    "id": "tx_seed_411",
    "type": "expense",
    "amount": 4600,
    "date": "2026-07-01",
    "categoryId": "cat_livros",
    "createdAt": 1793543409157,
    "updatedAt": 1793543409157
  },
  {
    "id": "tx_seed_412",
    "type": "expense",
    "amount": 245900,
    "date": "2026-07-01",
    "categoryId": "cat_carro",
    "createdAt": 1793543409158,
    "updatedAt": 1793543409158
  },
  {
    "id": "tx_seed_413",
    "type": "income",
    "amount": 820000,
    "date": "2026-07-01",
    "categoryId": "cat_restitui__o_irpf",
    "createdAt": 1793543409159,
    "updatedAt": 1793543409159
  },
  {
    "id": "tx_seed_414",
    "type": "expense",
    "amount": 800000,
    "date": "2026-07-01",
    "categoryId": "cat_bitcoin",
    "createdAt": 1793543409160,
    "updatedAt": 1793543409160
  },
  {
    "id": "tx_seed_415",
    "type": "expense",
    "amount": 2400,
    "date": "2026-06-30",
    "categoryId": "cat_alimentos",
    "note": "leite de castanha",
    "createdAt": 1793543409161,
    "updatedAt": 1793543409161
  },
  {
    "id": "tx_seed_416",
    "type": "expense",
    "amount": 13300,
    "date": "2026-06-30",
    "categoryId": "cat_roupa",
    "createdAt": 1793543409162,
    "updatedAt": 1793543409162
  },
  {
    "id": "tx_seed_417",
    "type": "expense",
    "amount": 3400,
    "date": "2026-06-30",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409163,
    "updatedAt": 1793543409163
  },
  {
    "id": "tx_seed_418",
    "type": "expense",
    "amount": 3400,
    "date": "2026-06-30",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409164,
    "updatedAt": 1793543409164
  },
  {
    "id": "tx_seed_419",
    "type": "expense",
    "amount": 1500,
    "date": "2026-06-29",
    "categoryId": "cat_roupa",
    "createdAt": 1793543409165,
    "updatedAt": 1793543409165
  },
  {
    "id": "tx_seed_420",
    "type": "expense",
    "amount": 3900,
    "date": "2026-06-29",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409166,
    "updatedAt": 1793543409166
  },
  {
    "id": "tx_seed_421",
    "type": "expense",
    "amount": 3900,
    "date": "2026-06-29",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409167,
    "updatedAt": 1793543409167
  },
  {
    "id": "tx_seed_422",
    "type": "expense",
    "amount": 5300,
    "date": "2026-06-28",
    "categoryId": "cat_livros",
    "createdAt": 1793543409168,
    "updatedAt": 1793543409168
  },
  {
    "id": "tx_seed_423",
    "type": "expense",
    "amount": 5700,
    "date": "2026-06-28",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409169,
    "updatedAt": 1793543409169
  },
  {
    "id": "tx_seed_424",
    "type": "expense",
    "amount": 6500,
    "date": "2026-06-28",
    "categoryId": "cat_educa__o",
    "createdAt": 1793543409170,
    "updatedAt": 1793543409170
  },
  {
    "id": "tx_seed_425",
    "type": "expense",
    "amount": 1400,
    "date": "2026-06-28",
    "categoryId": "cat_uber",
    "createdAt": 1793543409171,
    "updatedAt": 1793543409171
  },
  {
    "id": "tx_seed_426",
    "type": "expense",
    "amount": 7100,
    "date": "2026-06-27",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409172,
    "updatedAt": 1793543409172
  },
  {
    "id": "tx_seed_427",
    "type": "expense",
    "amount": 4500,
    "date": "2026-06-27",
    "categoryId": "cat_livros",
    "createdAt": 1793543409173,
    "updatedAt": 1793543409173
  },
  {
    "id": "tx_seed_428",
    "type": "expense",
    "amount": 24200,
    "date": "2026-06-26",
    "categoryId": "cat_alimentos",
    "note": "lowcarb",
    "createdAt": 1793543409174,
    "updatedAt": 1793543409174
  },
  {
    "id": "tx_seed_429",
    "type": "expense",
    "amount": 10200,
    "date": "2026-06-26",
    "categoryId": "cat_alimentos",
    "note": "supermercado",
    "createdAt": 1793543409175,
    "updatedAt": 1793543409175
  },
  {
    "id": "tx_seed_430",
    "type": "expense",
    "amount": 3800,
    "date": "2026-06-26",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409176,
    "updatedAt": 1793543409176
  },
  {
    "id": "tx_seed_431",
    "type": "expense",
    "amount": 3700,
    "date": "2026-06-26",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409177,
    "updatedAt": 1793543409177
  },
  {
    "id": "tx_seed_432",
    "type": "expense",
    "amount": 9900,
    "date": "2026-06-25",
    "categoryId": "cat_livros",
    "createdAt": 1793543409178,
    "updatedAt": 1793543409178
  },
  {
    "id": "tx_seed_433",
    "type": "expense",
    "amount": 5000,
    "date": "2026-06-25",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409179,
    "updatedAt": 1793543409179
  },
  {
    "id": "tx_seed_434",
    "type": "expense",
    "amount": 3800,
    "date": "2026-06-25",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409180,
    "updatedAt": 1793543409180
  },
  {
    "id": "tx_seed_435",
    "type": "expense",
    "amount": 3800,
    "date": "2026-06-25",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409181,
    "updatedAt": 1793543409181
  },
  {
    "id": "tx_seed_436",
    "type": "expense",
    "amount": 4100,
    "date": "2026-06-24",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409182,
    "updatedAt": 1793543409182
  },
  {
    "id": "tx_seed_437",
    "type": "expense",
    "amount": 3900,
    "date": "2026-06-24",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409183,
    "updatedAt": 1793543409183
  },
  {
    "id": "tx_seed_438",
    "type": "expense",
    "amount": 19900,
    "date": "2026-06-24",
    "categoryId": "cat_carro",
    "createdAt": 1793543409184,
    "updatedAt": 1793543409184
  },
  {
    "id": "tx_seed_439",
    "type": "expense",
    "amount": 4100,
    "date": "2026-06-23",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409185,
    "updatedAt": 1793543409185
  },
  {
    "id": "tx_seed_440",
    "type": "expense",
    "amount": 4400,
    "date": "2026-06-23",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409186,
    "updatedAt": 1793543409186
  },
  {
    "id": "tx_seed_441",
    "type": "expense",
    "amount": 3900,
    "date": "2026-06-22",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409187,
    "updatedAt": 1793543409187
  },
  {
    "id": "tx_seed_442",
    "type": "expense",
    "amount": 3500,
    "date": "2026-06-22",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409188,
    "updatedAt": 1793543409188
  },
  {
    "id": "tx_seed_443",
    "type": "expense",
    "amount": 24000,
    "date": "2026-06-21",
    "categoryId": "cat_nova_acr_pole",
    "createdAt": 1793543409189,
    "updatedAt": 1793543409189
  },
  {
    "id": "tx_seed_444",
    "type": "expense",
    "amount": 5700,
    "date": "2026-06-21",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409190,
    "updatedAt": 1793543409190
  },
  {
    "id": "tx_seed_445",
    "type": "expense",
    "amount": 11900,
    "date": "2026-06-21",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409191,
    "updatedAt": 1793543409191
  },
  {
    "id": "tx_seed_446",
    "type": "expense",
    "amount": 5700,
    "date": "2026-06-20",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409192,
    "updatedAt": 1793543409192
  },
  {
    "id": "tx_seed_447",
    "type": "expense",
    "amount": 32000,
    "date": "2026-06-20",
    "categoryId": "cat_casa",
    "createdAt": 1793543409193,
    "updatedAt": 1793543409193
  },
  {
    "id": "tx_seed_448",
    "type": "expense",
    "amount": 20000,
    "date": "2026-06-20",
    "categoryId": "cat_sa_de",
    "note": "podologia",
    "createdAt": 1793543409194,
    "updatedAt": 1793543409194
  },
  {
    "id": "tx_seed_449",
    "type": "expense",
    "amount": 22300,
    "date": "2026-06-19",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409195,
    "updatedAt": 1793543409195
  },
  {
    "id": "tx_seed_450",
    "type": "expense",
    "amount": 3800,
    "date": "2026-06-18",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409196,
    "updatedAt": 1793543409196
  },
  {
    "id": "tx_seed_451",
    "type": "expense",
    "amount": 3800,
    "date": "2026-06-18",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409197,
    "updatedAt": 1793543409197
  },
  {
    "id": "tx_seed_452",
    "type": "expense",
    "amount": 19000,
    "date": "2026-06-18",
    "categoryId": "cat_carro",
    "createdAt": 1793543409198,
    "updatedAt": 1793543409198
  },
  {
    "id": "tx_seed_453",
    "type": "expense",
    "amount": 3200,
    "date": "2026-06-17",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409199,
    "updatedAt": 1793543409199
  },
  {
    "id": "tx_seed_454",
    "type": "expense",
    "amount": 3600,
    "date": "2026-06-17",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409200,
    "updatedAt": 1793543409200
  },
  {
    "id": "tx_seed_455",
    "type": "expense",
    "amount": 2800,
    "date": "2026-06-16",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409201,
    "updatedAt": 1793543409201
  },
  {
    "id": "tx_seed_456",
    "type": "expense",
    "amount": 3800,
    "date": "2026-06-16",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409202,
    "updatedAt": 1793543409202
  },
  {
    "id": "tx_seed_457",
    "type": "expense",
    "amount": 3600,
    "date": "2026-06-16",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409203,
    "updatedAt": 1793543409203
  },
  {
    "id": "tx_seed_458",
    "type": "expense",
    "amount": 1800,
    "date": "2026-06-16",
    "categoryId": "cat_uber",
    "createdAt": 1793543409204,
    "updatedAt": 1793543409204
  },
  {
    "id": "tx_seed_459",
    "type": "expense",
    "amount": 3500,
    "date": "2026-06-15",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409205,
    "updatedAt": 1793543409205
  },
  {
    "id": "tx_seed_460",
    "type": "expense",
    "amount": 3900,
    "date": "2026-06-15",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409206,
    "updatedAt": 1793543409206
  },
  {
    "id": "tx_seed_461",
    "type": "expense",
    "amount": 4900,
    "date": "2026-06-15",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409207,
    "updatedAt": 1793543409207
  },
  {
    "id": "tx_seed_462",
    "type": "expense",
    "amount": 42100,
    "date": "2026-06-15",
    "categoryId": "cat_viagem",
    "note": "sp jornadas",
    "createdAt": 1793543409208,
    "updatedAt": 1793543409208
  },
  {
    "id": "tx_seed_463",
    "type": "expense",
    "amount": 7600,
    "date": "2026-06-14",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409209,
    "updatedAt": 1793543409209
  },
  {
    "id": "tx_seed_464",
    "type": "expense",
    "amount": 43000,
    "date": "2026-06-13",
    "categoryId": "cat_casa",
    "note": "microondas",
    "createdAt": 1793543409210,
    "updatedAt": 1793543409210
  },
  {
    "id": "tx_seed_465",
    "type": "expense",
    "amount": 3700,
    "date": "2026-06-13",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409211,
    "updatedAt": 1793543409211
  },
  {
    "id": "tx_seed_466",
    "type": "expense",
    "amount": 14900,
    "date": "2026-06-13",
    "categoryId": "cat_carro",
    "createdAt": 1793543409212,
    "updatedAt": 1793543409212
  },
  {
    "id": "tx_seed_467",
    "type": "expense",
    "amount": 22300,
    "date": "2026-06-12",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409213,
    "updatedAt": 1793543409213
  },
  {
    "id": "tx_seed_468",
    "type": "expense",
    "amount": 40000,
    "date": "2026-06-12",
    "categoryId": "cat_entretenimento",
    "note": "clube",
    "createdAt": 1793543409214,
    "updatedAt": 1793543409214
  },
  {
    "id": "tx_seed_469",
    "type": "expense",
    "amount": 4000,
    "date": "2026-06-12",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409215,
    "updatedAt": 1793543409215
  },
  {
    "id": "tx_seed_470",
    "type": "expense",
    "amount": 4700,
    "date": "2026-06-12",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409216,
    "updatedAt": 1793543409216
  },
  {
    "id": "tx_seed_471",
    "type": "expense",
    "amount": 13300,
    "date": "2026-06-11",
    "categoryId": "cat_roupa",
    "note": "calça gm",
    "createdAt": 1793543409217,
    "updatedAt": 1793543409217
  },
  {
    "id": "tx_seed_472",
    "type": "expense",
    "amount": 3900,
    "date": "2026-06-11",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409218,
    "updatedAt": 1793543409218
  },
  {
    "id": "tx_seed_473",
    "type": "expense",
    "amount": 4200,
    "date": "2026-06-11",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409219,
    "updatedAt": 1793543409219
  },
  {
    "id": "tx_seed_474",
    "type": "expense",
    "amount": 10000,
    "date": "2026-06-10",
    "categoryId": "cat_doa__o",
    "createdAt": 1793543409220,
    "updatedAt": 1793543409220
  },
  {
    "id": "tx_seed_475",
    "type": "expense",
    "amount": 4000,
    "date": "2026-06-10",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409221,
    "updatedAt": 1793543409221
  },
  {
    "id": "tx_seed_476",
    "type": "expense",
    "amount": 3800,
    "date": "2026-06-10",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409222,
    "updatedAt": 1793543409222
  },
  {
    "id": "tx_seed_477",
    "type": "expense",
    "amount": 15000,
    "date": "2026-06-10",
    "categoryId": "cat_nova_acr_pole",
    "note": "eletricista JL Mall",
    "createdAt": 1793543409223,
    "updatedAt": 1793543409223
  },
  {
    "id": "tx_seed_478",
    "type": "expense",
    "amount": 214800,
    "date": "2026-06-09",
    "categoryId": "cat_nova_acr_pole",
    "note": "mensalidade okay",
    "createdAt": 1793543409224,
    "updatedAt": 1793543409224
  },
  {
    "id": "tx_seed_479",
    "type": "expense",
    "amount": 4200,
    "date": "2026-06-09",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409226,
    "updatedAt": 1793543409226
  },
  {
    "id": "tx_seed_480",
    "type": "expense",
    "amount": 3600,
    "date": "2026-06-09",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409227,
    "updatedAt": 1793543409227
  },
  {
    "id": "tx_seed_481",
    "type": "expense",
    "amount": 10900,
    "date": "2026-06-09",
    "categoryId": "cat_internet",
    "createdAt": 1793543409228,
    "updatedAt": 1793543409228
  },
  {
    "id": "tx_seed_482",
    "type": "expense",
    "amount": 18320,
    "date": "2026-06-08",
    "categoryId": "cat_carro",
    "createdAt": 1793543409229,
    "updatedAt": 1793543409229
  },
  {
    "id": "tx_seed_483",
    "type": "expense",
    "amount": 3500,
    "date": "2026-06-08",
    "categoryId": "cat_uber",
    "createdAt": 1793543409230,
    "updatedAt": 1793543409230
  },
  {
    "id": "tx_seed_484",
    "type": "expense",
    "amount": 4100,
    "date": "2026-06-08",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409231,
    "updatedAt": 1793543409231
  },
  {
    "id": "tx_seed_485",
    "type": "expense",
    "amount": 3300,
    "date": "2026-06-08",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409232,
    "updatedAt": 1793543409232
  },
  {
    "id": "tx_seed_486",
    "type": "expense",
    "amount": 300000,
    "date": "2026-06-08",
    "categoryId": "cat_servi_os",
    "note": "faxina adiantada",
    "createdAt": 1793543409233,
    "updatedAt": 1793543409233
  },
  {
    "id": "tx_seed_487",
    "type": "expense",
    "amount": 245900,
    "date": "2026-06-08",
    "categoryId": "cat_carro",
    "createdAt": 1793543409234,
    "updatedAt": 1793543409234
  },
  {
    "id": "tx_seed_488",
    "type": "expense",
    "amount": 28500,
    "date": "2026-06-08",
    "categoryId": "cat_nova_acr_pole",
    "createdAt": 1793543409235,
    "updatedAt": 1793543409235
  },
  {
    "id": "tx_seed_489",
    "type": "expense",
    "amount": 151000,
    "date": "2026-06-08",
    "categoryId": "cat_sa_de",
    "createdAt": 1793543409236,
    "updatedAt": 1793543409236
  },
  {
    "id": "tx_seed_490",
    "type": "expense",
    "amount": 64400,
    "date": "2026-06-08",
    "categoryId": "cat_aluguel",
    "createdAt": 1793543409237,
    "updatedAt": 1793543409237
  },
  {
    "id": "tx_seed_491",
    "type": "expense",
    "amount": 376600,
    "date": "2026-06-08",
    "categoryId": "cat_aluguel",
    "createdAt": 1793543409238,
    "updatedAt": 1793543409238
  },
  {
    "id": "tx_seed_492",
    "type": "expense",
    "amount": 5700,
    "date": "2026-06-08",
    "categoryId": "cat_uber",
    "createdAt": 1793543409239,
    "updatedAt": 1793543409239
  },
  {
    "id": "tx_seed_493",
    "type": "expense",
    "amount": 4200,
    "date": "2026-06-07",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409240,
    "updatedAt": 1793543409240
  },
  {
    "id": "tx_seed_494",
    "type": "expense",
    "amount": 4500,
    "date": "2026-06-07",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409241,
    "updatedAt": 1793543409241
  },
  {
    "id": "tx_seed_495",
    "type": "expense",
    "amount": 20000,
    "date": "2026-06-07",
    "categoryId": "cat_transporte",
    "createdAt": 1793543409242,
    "updatedAt": 1793543409242
  },
  {
    "id": "tx_seed_496",
    "type": "income",
    "amount": 2766200,
    "date": "2026-06-06",
    "categoryId": "cat_sal_rio",
    "createdAt": 1793543409243,
    "updatedAt": 1793543409243
  },
  {
    "id": "tx_seed_497",
    "type": "expense",
    "amount": 2800,
    "date": "2026-06-05",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409244,
    "updatedAt": 1793543409244
  },
  {
    "id": "tx_seed_498",
    "type": "expense",
    "amount": 2400,
    "date": "2026-06-05",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409245,
    "updatedAt": 1793543409245
  },
  {
    "id": "tx_seed_499",
    "type": "expense",
    "amount": 2700,
    "date": "2026-06-04",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409246,
    "updatedAt": 1793543409246
  },
  {
    "id": "tx_seed_500",
    "type": "expense",
    "amount": 20000,
    "date": "2026-06-04",
    "categoryId": "cat_livros",
    "createdAt": 1793543409247,
    "updatedAt": 1793543409247
  },
  {
    "id": "tx_seed_501",
    "type": "expense",
    "amount": 6000,
    "date": "2026-06-04",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409248,
    "updatedAt": 1793543409248
  },
  {
    "id": "tx_seed_502",
    "type": "expense",
    "amount": 3300,
    "date": "2026-06-04",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409249,
    "updatedAt": 1793543409249
  },
  {
    "id": "tx_seed_503",
    "type": "expense",
    "amount": 3300,
    "date": "2026-06-04",
    "categoryId": "cat_uber",
    "createdAt": 1793543409250,
    "updatedAt": 1793543409250
  },
  {
    "id": "tx_seed_504",
    "type": "expense",
    "amount": 1500,
    "date": "2026-06-03",
    "categoryId": "cat_uber",
    "createdAt": 1793543409251,
    "updatedAt": 1793543409251
  },
  {
    "id": "tx_seed_505",
    "type": "expense",
    "amount": 4200,
    "date": "2026-06-03",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409252,
    "updatedAt": 1793543409252
  },
  {
    "id": "tx_seed_506",
    "type": "expense",
    "amount": 4500,
    "date": "2026-06-03",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409253,
    "updatedAt": 1793543409253
  },
  {
    "id": "tx_seed_507",
    "type": "expense",
    "amount": 3200,
    "date": "2026-06-02",
    "categoryId": "cat_uber",
    "createdAt": 1793543409254,
    "updatedAt": 1793543409254
  },
  {
    "id": "tx_seed_508",
    "type": "expense",
    "amount": 3200,
    "date": "2026-06-02",
    "categoryId": "cat_uber",
    "createdAt": 1793543409255,
    "updatedAt": 1793543409255
  },
  {
    "id": "tx_seed_509",
    "type": "expense",
    "amount": 4300,
    "date": "2026-06-02",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409256,
    "updatedAt": 1793543409256
  },
  {
    "id": "tx_seed_510",
    "type": "expense",
    "amount": 3900,
    "date": "2026-06-02",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409257,
    "updatedAt": 1793543409257
  },
  {
    "id": "tx_seed_511",
    "type": "expense",
    "amount": 4700,
    "date": "2026-06-02",
    "categoryId": "cat_uber",
    "createdAt": 1793543409258,
    "updatedAt": 1793543409258
  },
  {
    "id": "tx_seed_512",
    "type": "expense",
    "amount": 48000,
    "date": "2026-06-01",
    "categoryId": "cat_nova_acr_pole",
    "createdAt": 1793543409259,
    "updatedAt": 1793543409259
  },
  {
    "id": "tx_seed_513",
    "type": "expense",
    "amount": 3400,
    "date": "2026-06-01",
    "categoryId": "cat_uber",
    "createdAt": 1793543409260,
    "updatedAt": 1793543409260
  },
  {
    "id": "tx_seed_514",
    "type": "expense",
    "amount": 6500,
    "date": "2026-06-01",
    "categoryId": "cat_uber",
    "createdAt": 1793543409261,
    "updatedAt": 1793543409261
  },
  {
    "id": "tx_seed_515",
    "type": "expense",
    "amount": 3500,
    "date": "2026-06-01",
    "categoryId": "cat_uber",
    "createdAt": 1793543409262,
    "updatedAt": 1793543409262
  },
  {
    "id": "tx_seed_516",
    "type": "expense",
    "amount": 3100,
    "date": "2026-06-01",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409263,
    "updatedAt": 1793543409263
  },
  {
    "id": "tx_seed_517",
    "type": "expense",
    "amount": 3700,
    "date": "2026-06-01",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409264,
    "updatedAt": 1793543409264
  },
  {
    "id": "tx_seed_518",
    "type": "expense",
    "amount": 4900,
    "date": "2026-06-01",
    "categoryId": "cat_uber",
    "createdAt": 1793543409265,
    "updatedAt": 1793543409265
  },
  {
    "id": "tx_seed_519",
    "type": "expense",
    "amount": 5000,
    "date": "2026-06-01",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409266,
    "updatedAt": 1793543409266
  },
  {
    "id": "tx_seed_520",
    "type": "expense",
    "amount": 5300,
    "date": "2026-06-01",
    "categoryId": "cat_uber",
    "createdAt": 1793543409267,
    "updatedAt": 1793543409267
  },
  {
    "id": "tx_seed_521",
    "type": "expense",
    "amount": 3400,
    "date": "2026-06-01",
    "categoryId": "cat_uber",
    "createdAt": 1793543409268,
    "updatedAt": 1793543409268
  },
  {
    "id": "tx_seed_522",
    "type": "expense",
    "amount": 2900,
    "date": "2026-05-31",
    "categoryId": "cat_uber",
    "createdAt": 1793543409269,
    "updatedAt": 1793543409269
  },
  {
    "id": "tx_seed_523",
    "type": "expense",
    "amount": 3300,
    "date": "2026-05-31",
    "categoryId": "cat_uber",
    "createdAt": 1793543409270,
    "updatedAt": 1793543409270
  },
  {
    "id": "tx_seed_524",
    "type": "expense",
    "amount": 2000,
    "date": "2026-05-31",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409271,
    "updatedAt": 1793543409271
  },
  {
    "id": "tx_seed_525",
    "type": "expense",
    "amount": 11100,
    "date": "2026-05-31",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409272,
    "updatedAt": 1793543409272
  },
  {
    "id": "tx_seed_526",
    "type": "expense",
    "amount": 6700,
    "date": "2026-05-30",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409273,
    "updatedAt": 1793543409273
  },
  {
    "id": "tx_seed_527",
    "type": "expense",
    "amount": 2800,
    "date": "2026-05-30",
    "categoryId": "cat_uber",
    "createdAt": 1793543409274,
    "updatedAt": 1793543409274
  },
  {
    "id": "tx_seed_528",
    "type": "expense",
    "amount": 7500,
    "date": "2026-05-29",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409275,
    "updatedAt": 1793543409275
  },
  {
    "id": "tx_seed_529",
    "type": "expense",
    "amount": 3900,
    "date": "2026-05-29",
    "categoryId": "cat_uber",
    "createdAt": 1793543409276,
    "updatedAt": 1793543409276
  },
  {
    "id": "tx_seed_530",
    "type": "expense",
    "amount": 5000,
    "date": "2026-05-29",
    "categoryId": "cat_uber",
    "createdAt": 1793543409277,
    "updatedAt": 1793543409277
  },
  {
    "id": "tx_seed_531",
    "type": "expense",
    "amount": 10000,
    "date": "2026-05-29",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409278,
    "updatedAt": 1793543409278
  },
  {
    "id": "tx_seed_532",
    "type": "expense",
    "amount": 4500,
    "date": "2026-05-29",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409279,
    "updatedAt": 1793543409279
  },
  {
    "id": "tx_seed_533",
    "type": "expense",
    "amount": 2800,
    "date": "2026-05-28",
    "categoryId": "cat_alimentos",
    "note": "café",
    "createdAt": 1793543409280,
    "updatedAt": 1793543409280
  },
  {
    "id": "tx_seed_534",
    "type": "expense",
    "amount": 21200,
    "date": "2026-05-28",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409281,
    "updatedAt": 1793543409281
  },
  {
    "id": "tx_seed_535",
    "type": "expense",
    "amount": 3500,
    "date": "2026-05-28",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409282,
    "updatedAt": 1793543409282
  },
  {
    "id": "tx_seed_536",
    "type": "expense",
    "amount": 3300,
    "date": "2026-05-28",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409283,
    "updatedAt": 1793543409283
  },
  {
    "id": "tx_seed_537",
    "type": "expense",
    "amount": 3900,
    "date": "2026-05-27",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409284,
    "updatedAt": 1793543409284
  },
  {
    "id": "tx_seed_538",
    "type": "expense",
    "amount": 3500,
    "date": "2026-05-27",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409285,
    "updatedAt": 1793543409285
  },
  {
    "id": "tx_seed_539",
    "type": "expense",
    "amount": 3900,
    "date": "2026-05-27",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409286,
    "updatedAt": 1793543409286
  },
  {
    "id": "tx_seed_540",
    "type": "expense",
    "amount": 3600,
    "date": "2026-05-26",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409287,
    "updatedAt": 1793543409287
  },
  {
    "id": "tx_seed_541",
    "type": "expense",
    "amount": 3500,
    "date": "2026-05-26",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409288,
    "updatedAt": 1793543409288
  },
  {
    "id": "tx_seed_542",
    "type": "expense",
    "amount": 3200,
    "date": "2026-05-25",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409290,
    "updatedAt": 1793543409290
  },
  {
    "id": "tx_seed_543",
    "type": "expense",
    "amount": 3100,
    "date": "2026-05-25",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409291,
    "updatedAt": 1793543409291
  },
  {
    "id": "tx_seed_544",
    "type": "expense",
    "amount": 111600,
    "date": "2026-05-25",
    "categoryId": "cat_educa__o",
    "createdAt": 1793543409292,
    "updatedAt": 1793543409292
  },
  {
    "id": "tx_seed_545",
    "type": "expense",
    "amount": 5000,
    "date": "2026-05-25",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409293,
    "updatedAt": 1793543409293
  },
  {
    "id": "tx_seed_546",
    "type": "expense",
    "amount": 10000,
    "date": "2026-05-24",
    "categoryId": "cat_casa",
    "note": "tapete",
    "createdAt": 1793543409294,
    "updatedAt": 1793543409294
  },
  {
    "id": "tx_seed_547",
    "type": "expense",
    "amount": 126000,
    "date": "2026-05-24",
    "categoryId": "cat_casa",
    "note": "mesa sala",
    "createdAt": 1793543409295,
    "updatedAt": 1793543409295
  },
  {
    "id": "tx_seed_548",
    "type": "expense",
    "amount": 4100,
    "date": "2026-05-24",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409296,
    "updatedAt": 1793543409296
  },
  {
    "id": "tx_seed_549",
    "type": "expense",
    "amount": 20000,
    "date": "2026-05-24",
    "categoryId": "cat_carro",
    "createdAt": 1793543409297,
    "updatedAt": 1793543409297
  },
  {
    "id": "tx_seed_550",
    "type": "expense",
    "amount": 4800,
    "date": "2026-05-24",
    "categoryId": "cat_casa",
    "createdAt": 1793543409298,
    "updatedAt": 1793543409298
  },
  {
    "id": "tx_seed_551",
    "type": "expense",
    "amount": 7900,
    "date": "2026-05-23",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409299,
    "updatedAt": 1793543409299
  },
  {
    "id": "tx_seed_552",
    "type": "expense",
    "amount": 5600,
    "date": "2026-05-23",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409300,
    "updatedAt": 1793543409300
  },
  {
    "id": "tx_seed_553",
    "type": "expense",
    "amount": 35000,
    "date": "2026-05-23",
    "categoryId": "cat_nova_acr_pole",
    "note": "cintos",
    "createdAt": 1793543409301,
    "updatedAt": 1793543409301
  },
  {
    "id": "tx_seed_554",
    "type": "expense",
    "amount": 3000,
    "date": "2026-05-22",
    "categoryId": "cat_casa",
    "note": "forma de gelo",
    "createdAt": 1793543409302,
    "updatedAt": 1793543409302
  },
  {
    "id": "tx_seed_555",
    "type": "expense",
    "amount": 2500,
    "date": "2026-05-22",
    "categoryId": "cat_casa",
    "note": "forma air fryer",
    "createdAt": 1793543409303,
    "updatedAt": 1793543409303
  },
  {
    "id": "tx_seed_556",
    "type": "expense",
    "amount": 5000,
    "date": "2026-05-22",
    "categoryId": "cat_livros",
    "note": "ebooks airfryer",
    "createdAt": 1793543409304,
    "updatedAt": 1793543409304
  },
  {
    "id": "tx_seed_557",
    "type": "expense",
    "amount": 7600,
    "date": "2026-05-22",
    "categoryId": "cat_internet",
    "note": "castalia.net.br",
    "createdAt": 1793543409305,
    "updatedAt": 1793543409305
  },
  {
    "id": "tx_seed_558",
    "type": "expense",
    "amount": 3200,
    "date": "2026-05-22",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409306,
    "updatedAt": 1793543409306
  },
  {
    "id": "tx_seed_559",
    "type": "expense",
    "amount": 41100,
    "date": "2026-05-22",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409307,
    "updatedAt": 1793543409307
  },
  {
    "id": "tx_seed_560",
    "type": "expense",
    "amount": 18100,
    "date": "2026-05-21",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409308,
    "updatedAt": 1793543409308
  },
  {
    "id": "tx_seed_561",
    "type": "expense",
    "amount": 3700,
    "date": "2026-05-21",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409309,
    "updatedAt": 1793543409309
  },
  {
    "id": "tx_seed_562",
    "type": "expense",
    "amount": 3600,
    "date": "2026-05-21",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409310,
    "updatedAt": 1793543409310
  },
  {
    "id": "tx_seed_563",
    "type": "expense",
    "amount": 3300,
    "date": "2026-05-20",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409311,
    "updatedAt": 1793543409311
  },
  {
    "id": "tx_seed_564",
    "type": "expense",
    "amount": 2200,
    "date": "2026-05-20",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409312,
    "updatedAt": 1793543409312
  },
  {
    "id": "tx_seed_565",
    "type": "expense",
    "amount": 3900,
    "date": "2026-05-19",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409313,
    "updatedAt": 1793543409313
  },
  {
    "id": "tx_seed_566",
    "type": "expense",
    "amount": 4000,
    "date": "2026-05-19",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409314,
    "updatedAt": 1793543409314
  },
  {
    "id": "tx_seed_567",
    "type": "expense",
    "amount": 5600,
    "date": "2026-05-18",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409315,
    "updatedAt": 1793543409315
  },
  {
    "id": "tx_seed_568",
    "type": "expense",
    "amount": 3800,
    "date": "2026-05-18",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409316,
    "updatedAt": 1793543409316
  },
  {
    "id": "tx_seed_569",
    "type": "expense",
    "amount": 3200,
    "date": "2026-05-18",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409317,
    "updatedAt": 1793543409317
  },
  {
    "id": "tx_seed_570",
    "type": "income",
    "amount": 21000,
    "date": "2026-05-18",
    "categoryId": "cat_rateio",
    "createdAt": 1793543409318,
    "updatedAt": 1793543409318
  },
  {
    "id": "tx_seed_571",
    "type": "expense",
    "amount": 17500,
    "date": "2026-05-18",
    "categoryId": "cat_carro",
    "createdAt": 1793543409319,
    "updatedAt": 1793543409319
  },
  {
    "id": "tx_seed_572",
    "type": "expense",
    "amount": 18900,
    "date": "2026-05-17",
    "categoryId": "cat_casa",
    "createdAt": 1793543409320,
    "updatedAt": 1793543409320
  },
  {
    "id": "tx_seed_573",
    "type": "expense",
    "amount": 4300,
    "date": "2026-05-17",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409321,
    "updatedAt": 1793543409321
  },
  {
    "id": "tx_seed_574",
    "type": "expense",
    "amount": 3500,
    "date": "2026-05-16",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409322,
    "updatedAt": 1793543409322
  },
  {
    "id": "tx_seed_575",
    "type": "expense",
    "amount": 11100,
    "date": "2026-05-15",
    "categoryId": "cat_higiene",
    "createdAt": 1793543409323,
    "updatedAt": 1793543409323
  },
  {
    "id": "tx_seed_576",
    "type": "expense",
    "amount": 26600,
    "date": "2026-05-15",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409324,
    "updatedAt": 1793543409324
  },
  {
    "id": "tx_seed_577",
    "type": "expense",
    "amount": 4000,
    "date": "2026-05-15",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409325,
    "updatedAt": 1793543409325
  },
  {
    "id": "tx_seed_578",
    "type": "expense",
    "amount": 4100,
    "date": "2026-05-15",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409326,
    "updatedAt": 1793543409326
  },
  {
    "id": "tx_seed_579",
    "type": "expense",
    "amount": 11100,
    "date": "2026-05-15",
    "categoryId": "cat_internet",
    "createdAt": 1793543409327,
    "updatedAt": 1793543409327
  },
  {
    "id": "tx_seed_580",
    "type": "expense",
    "amount": 17700,
    "date": "2026-05-14",
    "categoryId": "cat_carro",
    "createdAt": 1793543409328,
    "updatedAt": 1793543409328
  },
  {
    "id": "tx_seed_581",
    "type": "expense",
    "amount": 64300,
    "date": "2026-05-14",
    "categoryId": "cat_aluguel",
    "createdAt": 1793543409329,
    "updatedAt": 1793543409329
  },
  {
    "id": "tx_seed_582",
    "type": "expense",
    "amount": 34700,
    "date": "2026-05-14",
    "categoryId": "cat_servi_os",
    "note": "affemg",
    "createdAt": 1793543409330,
    "updatedAt": 1793543409330
  },
  {
    "id": "tx_seed_583",
    "type": "expense",
    "amount": 16000,
    "date": "2026-05-14",
    "categoryId": "cat_nova_acr_pole",
    "createdAt": 1793543409331,
    "updatedAt": 1793543409331
  },
  {
    "id": "tx_seed_584",
    "type": "expense",
    "amount": 3800,
    "date": "2026-05-14",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409332,
    "updatedAt": 1793543409332
  },
  {
    "id": "tx_seed_585",
    "type": "expense",
    "amount": 3500,
    "date": "2026-05-14",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409333,
    "updatedAt": 1793543409333
  },
  {
    "id": "tx_seed_586",
    "type": "expense",
    "amount": 4000,
    "date": "2026-05-13",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409334,
    "updatedAt": 1793543409334
  },
  {
    "id": "tx_seed_587",
    "type": "expense",
    "amount": 3400,
    "date": "2026-05-13",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409335,
    "updatedAt": 1793543409335
  },
  {
    "id": "tx_seed_588",
    "type": "expense",
    "amount": 2800,
    "date": "2026-05-12",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409336,
    "updatedAt": 1793543409336
  },
  {
    "id": "tx_seed_589",
    "type": "expense",
    "amount": 4300,
    "date": "2026-05-12",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409337,
    "updatedAt": 1793543409337
  },
  {
    "id": "tx_seed_590",
    "type": "expense",
    "amount": 3700,
    "date": "2026-05-12",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409338,
    "updatedAt": 1793543409338
  },
  {
    "id": "tx_seed_591",
    "type": "expense",
    "amount": 3400,
    "date": "2026-05-11",
    "categoryId": "cat_casa",
    "createdAt": 1793543409339,
    "updatedAt": 1793543409339
  },
  {
    "id": "tx_seed_592",
    "type": "expense",
    "amount": 5000,
    "date": "2026-05-11",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409340,
    "updatedAt": 1793543409340
  },
  {
    "id": "tx_seed_593",
    "type": "expense",
    "amount": 3100,
    "date": "2026-05-11",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409341,
    "updatedAt": 1793543409341
  },
  {
    "id": "tx_seed_594",
    "type": "expense",
    "amount": 4000,
    "date": "2026-05-11",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409342,
    "updatedAt": 1793543409342
  },
  {
    "id": "tx_seed_595",
    "type": "expense",
    "amount": 16100,
    "date": "2026-05-10",
    "categoryId": "cat_comida",
    "createdAt": 1793543409343,
    "updatedAt": 1793543409343
  },
  {
    "id": "tx_seed_596",
    "type": "expense",
    "amount": 3500,
    "date": "2026-05-10",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409344,
    "updatedAt": 1793543409344
  },
  {
    "id": "tx_seed_597",
    "type": "expense",
    "amount": 6100,
    "date": "2026-05-09",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409345,
    "updatedAt": 1793543409345
  },
  {
    "id": "tx_seed_598",
    "type": "expense",
    "amount": 5600,
    "date": "2026-05-09",
    "categoryId": "cat_comida",
    "createdAt": 1793543409346,
    "updatedAt": 1793543409346
  },
  {
    "id": "tx_seed_599",
    "type": "expense",
    "amount": 25000,
    "date": "2026-05-08",
    "categoryId": "cat_casa",
    "createdAt": 1793543409347,
    "updatedAt": 1793543409347
  },
  {
    "id": "tx_seed_600",
    "type": "expense",
    "amount": 245900,
    "date": "2026-05-08",
    "categoryId": "cat_carro",
    "createdAt": 1793543409348,
    "updatedAt": 1793543409348
  },
  {
    "id": "tx_seed_601",
    "type": "expense",
    "amount": 40000,
    "date": "2026-05-08",
    "categoryId": "cat_entretenimento",
    "note": "clube",
    "createdAt": 1793543409349,
    "updatedAt": 1793543409349
  },
  {
    "id": "tx_seed_602",
    "type": "income",
    "amount": 2208800,
    "date": "2026-05-08",
    "categoryId": "cat_sal_rio",
    "createdAt": 1793543409350,
    "updatedAt": 1793543409350
  },
  {
    "id": "tx_seed_603",
    "type": "expense",
    "amount": 3000,
    "date": "2026-05-08",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409351,
    "updatedAt": 1793543409351
  },
  {
    "id": "tx_seed_604",
    "type": "expense",
    "amount": 300000,
    "date": "2026-05-08",
    "categoryId": "cat_bitcoin",
    "createdAt": 1793543409352,
    "updatedAt": 1793543409352
  },
  {
    "id": "tx_seed_605",
    "type": "expense",
    "amount": 10900,
    "date": "2026-05-08",
    "categoryId": "cat_internet",
    "createdAt": 1793543409353,
    "updatedAt": 1793543409353
  },
  {
    "id": "tx_seed_606",
    "type": "expense",
    "amount": 15900,
    "date": "2026-05-08",
    "categoryId": "cat_servi_os",
    "note": "CEMIG",
    "createdAt": 1793543409354,
    "updatedAt": 1793543409354
  },
  {
    "id": "tx_seed_607",
    "type": "expense",
    "amount": 7000,
    "date": "2026-05-08",
    "categoryId": "cat_servi_os",
    "note": "box100",
    "createdAt": 1793543409355,
    "updatedAt": 1793543409355
  },
  {
    "id": "tx_seed_608",
    "type": "expense",
    "amount": 28500,
    "date": "2026-05-08",
    "categoryId": "cat_nova_acr_pole",
    "createdAt": 1793543409356,
    "updatedAt": 1793543409356
  },
  {
    "id": "tx_seed_609",
    "type": "expense",
    "amount": 38200,
    "date": "2026-05-08",
    "categoryId": "cat_aluguel",
    "note": "Condomínio Itapoã",
    "createdAt": 1793543409357,
    "updatedAt": 1793543409357
  },
  {
    "id": "tx_seed_610",
    "type": "expense",
    "amount": 9800,
    "date": "2026-05-08",
    "categoryId": "cat_doa__o",
    "note": "presente mamãe",
    "createdAt": 1793543409358,
    "updatedAt": 1793543409358
  },
  {
    "id": "tx_seed_611",
    "type": "expense",
    "amount": 17600,
    "date": "2026-05-07",
    "categoryId": "cat_carro",
    "createdAt": 1793543409359,
    "updatedAt": 1793543409359
  },
  {
    "id": "tx_seed_612",
    "type": "expense",
    "amount": 5700,
    "date": "2026-05-07",
    "categoryId": "cat_casa",
    "note": "relógio",
    "createdAt": 1793543409360,
    "updatedAt": 1793543409360
  },
  {
    "id": "tx_seed_613",
    "type": "expense",
    "amount": 78000,
    "date": "2026-05-07",
    "categoryId": "cat_aluguel",
    "note": "pintura ap",
    "createdAt": 1793543409361,
    "updatedAt": 1793543409361
  },
  {
    "id": "tx_seed_614",
    "type": "expense",
    "amount": 4200,
    "date": "2026-05-07",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409362,
    "updatedAt": 1793543409362
  },
  {
    "id": "tx_seed_615",
    "type": "expense",
    "amount": 4000,
    "date": "2026-05-07",
    "categoryId": "cat_casa",
    "note": "tapetes",
    "createdAt": 1793543409363,
    "updatedAt": 1793543409363
  },
  {
    "id": "tx_seed_616",
    "type": "expense",
    "amount": 16900,
    "date": "2026-05-07",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409364,
    "updatedAt": 1793543409364
  },
  {
    "id": "tx_seed_617",
    "type": "expense",
    "amount": 26600,
    "date": "2026-05-07",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409365,
    "updatedAt": 1793543409365
  },
  {
    "id": "tx_seed_618",
    "type": "expense",
    "amount": 4800,
    "date": "2026-05-06",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409366,
    "updatedAt": 1793543409366
  },
  {
    "id": "tx_seed_619",
    "type": "expense",
    "amount": 3200,
    "date": "2026-05-06",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409367,
    "updatedAt": 1793543409367
  },
  {
    "id": "tx_seed_620",
    "type": "expense",
    "amount": 5800,
    "date": "2026-05-05",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409368,
    "updatedAt": 1793543409368
  },
  {
    "id": "tx_seed_621",
    "type": "expense",
    "amount": 8400,
    "date": "2026-05-05",
    "categoryId": "cat_casa",
    "createdAt": 1793543409369,
    "updatedAt": 1793543409369
  },
  {
    "id": "tx_seed_622",
    "type": "expense",
    "amount": 3800,
    "date": "2026-05-05",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409370,
    "updatedAt": 1793543409370
  },
  {
    "id": "tx_seed_623",
    "type": "expense",
    "amount": 99300,
    "date": "2026-05-05",
    "categoryId": "cat_aluguel",
    "createdAt": 1793543409371,
    "updatedAt": 1793543409371
  },
  {
    "id": "tx_seed_624",
    "type": "expense",
    "amount": 174500,
    "date": "2026-05-05",
    "categoryId": "cat_aluguel",
    "createdAt": 1793543409372,
    "updatedAt": 1793543409372
  },
  {
    "id": "tx_seed_625",
    "type": "expense",
    "amount": 5000,
    "date": "2026-05-04",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409373,
    "updatedAt": 1793543409373
  },
  {
    "id": "tx_seed_626",
    "type": "expense",
    "amount": 3800,
    "date": "2026-05-04",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409374,
    "updatedAt": 1793543409374
  },
  {
    "id": "tx_seed_627",
    "type": "expense",
    "amount": 13900,
    "date": "2026-05-03",
    "categoryId": "cat_comida",
    "createdAt": 1793543409375,
    "updatedAt": 1793543409375
  },
  {
    "id": "tx_seed_628",
    "type": "expense",
    "amount": 13900,
    "date": "2026-05-02",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409376,
    "updatedAt": 1793543409376
  },
  {
    "id": "tx_seed_629",
    "type": "expense",
    "amount": 8400,
    "date": "2026-05-02",
    "categoryId": "cat_comida",
    "createdAt": 1793543409377,
    "updatedAt": 1793543409377
  },
  {
    "id": "tx_seed_630",
    "type": "expense",
    "amount": 6300,
    "date": "2026-05-02",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409378,
    "updatedAt": 1793543409378
  },
  {
    "id": "tx_seed_631",
    "type": "expense",
    "amount": 150000,
    "date": "2026-05-02",
    "categoryId": "cat_aluguel",
    "note": "mudança",
    "createdAt": 1793543409379,
    "updatedAt": 1793543409379
  },
  {
    "id": "tx_seed_632",
    "type": "expense",
    "amount": 2200,
    "date": "2026-05-01",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409380,
    "updatedAt": 1793543409380
  },
  {
    "id": "tx_seed_633",
    "type": "expense",
    "amount": 10800,
    "date": "2026-05-01",
    "categoryId": "cat_comida",
    "createdAt": 1793543409381,
    "updatedAt": 1793543409381
  },
  {
    "id": "tx_seed_634",
    "type": "expense",
    "amount": 11300,
    "date": "2026-05-01",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409382,
    "updatedAt": 1793543409382
  },
  {
    "id": "tx_seed_635",
    "type": "expense",
    "amount": 20000,
    "date": "2026-05-01",
    "categoryId": "cat_sa_de",
    "note": "podologia",
    "createdAt": 1793543409383,
    "updatedAt": 1793543409383
  },
  {
    "id": "tx_seed_636",
    "type": "expense",
    "amount": 330000,
    "date": "2026-05-01",
    "categoryId": "cat_casa",
    "note": "maquina de lavar",
    "createdAt": 1793543409384,
    "updatedAt": 1793543409384
  },
  {
    "id": "tx_seed_637",
    "type": "expense",
    "amount": 19300,
    "date": "2026-04-30",
    "categoryId": "cat_carro",
    "createdAt": 1793543409385,
    "updatedAt": 1793543409385
  },
  {
    "id": "tx_seed_638",
    "type": "expense",
    "amount": 3600,
    "date": "2026-04-30",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409386,
    "updatedAt": 1793543409386
  },
  {
    "id": "tx_seed_639",
    "type": "expense",
    "amount": 3600,
    "date": "2026-04-30",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409387,
    "updatedAt": 1793543409387
  },
  {
    "id": "tx_seed_640",
    "type": "expense",
    "amount": 3400,
    "date": "2026-04-29",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409388,
    "updatedAt": 1793543409388
  },
  {
    "id": "tx_seed_641",
    "type": "expense",
    "amount": 3800,
    "date": "2026-04-29",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409389,
    "updatedAt": 1793543409389
  },
  {
    "id": "tx_seed_642",
    "type": "expense",
    "amount": 27300,
    "date": "2026-04-28",
    "categoryId": "cat_casa",
    "note": "copia chaves",
    "createdAt": 1793543409390,
    "updatedAt": 1793543409390
  },
  {
    "id": "tx_seed_643",
    "type": "expense",
    "amount": 7100,
    "date": "2026-04-28",
    "categoryId": "cat_alimentos",
    "note": "café",
    "createdAt": 1793543409391,
    "updatedAt": 1793543409391
  },
  {
    "id": "tx_seed_644",
    "type": "expense",
    "amount": 4300,
    "date": "2026-04-28",
    "categoryId": "cat_servi_os",
    "createdAt": 1793543409392,
    "updatedAt": 1793543409392
  },
  {
    "id": "tx_seed_645",
    "type": "expense",
    "amount": 3200,
    "date": "2026-04-28",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409393,
    "updatedAt": 1793543409393
  },
  {
    "id": "tx_seed_646",
    "type": "expense",
    "amount": 3900,
    "date": "2026-04-28",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409394,
    "updatedAt": 1793543409394
  },
  {
    "id": "tx_seed_647",
    "type": "expense",
    "amount": 4000,
    "date": "2026-04-28",
    "categoryId": "cat_livros",
    "createdAt": 1793543409395,
    "updatedAt": 1793543409395
  },
  {
    "id": "tx_seed_648",
    "type": "expense",
    "amount": 9700,
    "date": "2026-04-27",
    "categoryId": "cat_internet",
    "note": "google",
    "createdAt": 1793543409396,
    "updatedAt": 1793543409396
  },
  {
    "id": "tx_seed_649",
    "type": "expense",
    "amount": 3500,
    "date": "2026-04-27",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409397,
    "updatedAt": 1793543409397
  },
  {
    "id": "tx_seed_650",
    "type": "expense",
    "amount": 2700,
    "date": "2026-04-27",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409398,
    "updatedAt": 1793543409398
  },
  {
    "id": "tx_seed_651",
    "type": "expense",
    "amount": 14900,
    "date": "2026-04-26",
    "categoryId": "cat_comida",
    "createdAt": 1793543409399,
    "updatedAt": 1793543409399
  },
  {
    "id": "tx_seed_652",
    "type": "expense",
    "amount": 4800,
    "date": "2026-04-25",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409400,
    "updatedAt": 1793543409400
  },
  {
    "id": "tx_seed_653",
    "type": "expense",
    "amount": 4200,
    "date": "2026-04-25",
    "categoryId": "cat_doa__o",
    "createdAt": 1793543409401,
    "updatedAt": 1793543409401
  },
  {
    "id": "tx_seed_654",
    "type": "expense",
    "amount": 2300,
    "date": "2026-04-25",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409402,
    "updatedAt": 1793543409402
  },
  {
    "id": "tx_seed_655",
    "type": "expense",
    "amount": 14500,
    "date": "2026-04-25",
    "categoryId": "cat_comida",
    "createdAt": 1793543409403,
    "updatedAt": 1793543409403
  },
  {
    "id": "tx_seed_656",
    "type": "expense",
    "amount": 1700,
    "date": "2026-04-25",
    "categoryId": "cat_uber",
    "createdAt": 1793543409404,
    "updatedAt": 1793543409404
  },
  {
    "id": "tx_seed_657",
    "type": "expense",
    "amount": 16740,
    "date": "2026-04-24",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409405,
    "updatedAt": 1793543409405
  },
  {
    "id": "tx_seed_658",
    "type": "expense",
    "amount": 43500,
    "date": "2026-04-24",
    "categoryId": "cat_servi_os",
    "note": "contadora",
    "createdAt": 1793543409406,
    "updatedAt": 1793543409406
  },
  {
    "id": "tx_seed_659",
    "type": "expense",
    "amount": 3500,
    "date": "2026-04-24",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409407,
    "updatedAt": 1793543409407
  },
  {
    "id": "tx_seed_660",
    "type": "expense",
    "amount": 19100,
    "date": "2026-04-24",
    "categoryId": "cat_carro",
    "createdAt": 1793543409408,
    "updatedAt": 1793543409408
  },
  {
    "id": "tx_seed_661",
    "type": "expense",
    "amount": 3300,
    "date": "2026-04-23",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409409,
    "updatedAt": 1793543409409
  },
  {
    "id": "tx_seed_662",
    "type": "expense",
    "amount": 2800,
    "date": "2026-04-23",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409410,
    "updatedAt": 1793543409410
  },
  {
    "id": "tx_seed_663",
    "type": "expense",
    "amount": 3600,
    "date": "2026-04-23",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409411,
    "updatedAt": 1793543409411
  },
  {
    "id": "tx_seed_664",
    "type": "expense",
    "amount": 3400,
    "date": "2026-04-23",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409412,
    "updatedAt": 1793543409412
  },
  {
    "id": "tx_seed_665",
    "type": "expense",
    "amount": 6500,
    "date": "2026-04-22",
    "categoryId": "cat_uber",
    "createdAt": 1793543409413,
    "updatedAt": 1793543409413
  },
  {
    "id": "tx_seed_666",
    "type": "expense",
    "amount": 3700,
    "date": "2026-04-22",
    "categoryId": "cat_uber",
    "createdAt": 1793543409414,
    "updatedAt": 1793543409414
  },
  {
    "id": "tx_seed_667",
    "type": "expense",
    "amount": 3600,
    "date": "2026-04-22",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409415,
    "updatedAt": 1793543409415
  },
  {
    "id": "tx_seed_668",
    "type": "expense",
    "amount": 3800,
    "date": "2026-04-22",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409416,
    "updatedAt": 1793543409416
  },
  {
    "id": "tx_seed_669",
    "type": "expense",
    "amount": 24000,
    "date": "2026-04-22",
    "categoryId": "cat_nova_acr_pole",
    "createdAt": 1793543409417,
    "updatedAt": 1793543409417
  },
  {
    "id": "tx_seed_670",
    "type": "expense",
    "amount": 4800,
    "date": "2026-04-21",
    "categoryId": "cat_livros",
    "createdAt": 1793543409418,
    "updatedAt": 1793543409418
  },
  {
    "id": "tx_seed_671",
    "type": "expense",
    "amount": 3300,
    "date": "2026-04-21",
    "categoryId": "cat_livros",
    "createdAt": 1793543409419,
    "updatedAt": 1793543409419
  },
  {
    "id": "tx_seed_672",
    "type": "expense",
    "amount": 14700,
    "date": "2026-04-21",
    "categoryId": "cat_comida",
    "createdAt": 1793543409420,
    "updatedAt": 1793543409420
  },
  {
    "id": "tx_seed_673",
    "type": "expense",
    "amount": 4500,
    "date": "2026-04-20",
    "categoryId": "cat_alimentos",
    "note": "pimenta",
    "createdAt": 1793543409421,
    "updatedAt": 1793543409421
  },
  {
    "id": "tx_seed_674",
    "type": "expense",
    "amount": 4400,
    "date": "2026-04-20",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409422,
    "updatedAt": 1793543409422
  },
  {
    "id": "tx_seed_675",
    "type": "expense",
    "amount": 10500,
    "date": "2026-04-20",
    "categoryId": "cat_comida",
    "createdAt": 1793543409423,
    "updatedAt": 1793543409423
  },
  {
    "id": "tx_seed_676",
    "type": "expense",
    "amount": 3500,
    "date": "2026-04-20",
    "categoryId": "cat_casa",
    "note": "balança",
    "createdAt": 1793543409424,
    "updatedAt": 1793543409424
  },
  {
    "id": "tx_seed_677",
    "type": "expense",
    "amount": 3700,
    "date": "2026-04-17",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409425,
    "updatedAt": 1793543409425
  },
  {
    "id": "tx_seed_678",
    "type": "expense",
    "amount": 13600,
    "date": "2026-04-17",
    "categoryId": "cat_carro",
    "createdAt": 1793543409426,
    "updatedAt": 1793543409426
  },
  {
    "id": "tx_seed_679",
    "type": "expense",
    "amount": 21700,
    "date": "2026-04-17",
    "categoryId": "cat_comida",
    "createdAt": 1793543409427,
    "updatedAt": 1793543409427
  },
  {
    "id": "tx_seed_680",
    "type": "expense",
    "amount": 3700,
    "date": "2026-04-17",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409428,
    "updatedAt": 1793543409428
  },
  {
    "id": "tx_seed_681",
    "type": "expense",
    "amount": 3600,
    "date": "2026-04-16",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409429,
    "updatedAt": 1793543409429
  },
  {
    "id": "tx_seed_682",
    "type": "expense",
    "amount": 3600,
    "date": "2026-04-16",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409430,
    "updatedAt": 1793543409430
  },
  {
    "id": "tx_seed_683",
    "type": "expense",
    "amount": 6000,
    "date": "2026-04-15",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409431,
    "updatedAt": 1793543409431
  },
  {
    "id": "tx_seed_684",
    "type": "expense",
    "amount": 518400,
    "date": "2026-04-15",
    "categoryId": "cat_servi_os",
    "note": "affemg",
    "createdAt": 1793543409432,
    "updatedAt": 1793543409432
  },
  {
    "id": "tx_seed_685",
    "type": "expense",
    "amount": 3300,
    "date": "2026-04-15",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409433,
    "updatedAt": 1793543409433
  },
  {
    "id": "tx_seed_686",
    "type": "expense",
    "amount": 3900,
    "date": "2026-04-15",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409434,
    "updatedAt": 1793543409434
  },
  {
    "id": "tx_seed_687",
    "type": "expense",
    "amount": 15000,
    "date": "2026-04-15",
    "categoryId": "cat_carro",
    "note": "multa",
    "createdAt": 1793543409435,
    "updatedAt": 1793543409435
  },
  {
    "id": "tx_seed_688",
    "type": "expense",
    "amount": 3900,
    "date": "2026-04-14",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409436,
    "updatedAt": 1793543409436
  },
  {
    "id": "tx_seed_689",
    "type": "expense",
    "amount": 33600,
    "date": "2026-04-14",
    "categoryId": "cat_aluguel",
    "createdAt": 1793543409437,
    "updatedAt": 1793543409437
  },
  {
    "id": "tx_seed_690",
    "type": "expense",
    "amount": 4500,
    "date": "2026-04-14",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409438,
    "updatedAt": 1793543409438
  },
  {
    "id": "tx_seed_691",
    "type": "expense",
    "amount": 17500,
    "date": "2026-04-13",
    "categoryId": "cat_carro",
    "createdAt": 1793543409439,
    "updatedAt": 1793543409439
  },
  {
    "id": "tx_seed_692",
    "type": "expense",
    "amount": 4200,
    "date": "2026-04-13",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409440,
    "updatedAt": 1793543409440
  },
  {
    "id": "tx_seed_693",
    "type": "expense",
    "amount": 3600,
    "date": "2026-04-13",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409441,
    "updatedAt": 1793543409441
  },
  {
    "id": "tx_seed_694",
    "type": "expense",
    "amount": 6000,
    "date": "2026-04-13",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409442,
    "updatedAt": 1793543409442
  },
  {
    "id": "tx_seed_695",
    "type": "expense",
    "amount": 19900,
    "date": "2026-04-12",
    "categoryId": "cat_livros",
    "createdAt": 1793543409443,
    "updatedAt": 1793543409443
  },
  {
    "id": "tx_seed_696",
    "type": "expense",
    "amount": 14500,
    "date": "2026-04-12",
    "categoryId": "cat_comida",
    "createdAt": 1793543409444,
    "updatedAt": 1793543409444
  },
  {
    "id": "tx_seed_697",
    "type": "expense",
    "amount": 12700,
    "date": "2026-04-11",
    "categoryId": "cat_comida",
    "createdAt": 1793543409445,
    "updatedAt": 1793543409445
  },
  {
    "id": "tx_seed_698",
    "type": "expense",
    "amount": 18400,
    "date": "2026-04-10",
    "categoryId": "cat_educa__o",
    "createdAt": 1793543409446,
    "updatedAt": 1793543409446
  },
  {
    "id": "tx_seed_699",
    "type": "expense",
    "amount": 4200,
    "date": "2026-04-10",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409447,
    "updatedAt": 1793543409447
  },
  {
    "id": "tx_seed_700",
    "type": "expense",
    "amount": 4200,
    "date": "2026-04-10",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409448,
    "updatedAt": 1793543409448
  },
  {
    "id": "tx_seed_701",
    "type": "expense",
    "amount": 3400,
    "date": "2026-04-10",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409449,
    "updatedAt": 1793543409449
  },
  {
    "id": "tx_seed_702",
    "type": "expense",
    "amount": 245900,
    "date": "2026-04-10",
    "categoryId": "cat_carro",
    "createdAt": 1793543409450,
    "updatedAt": 1793543409450
  },
  {
    "id": "tx_seed_703",
    "type": "expense",
    "amount": 7500,
    "date": "2026-04-10",
    "categoryId": "cat_internet",
    "createdAt": 1793543409451,
    "updatedAt": 1793543409451
  },
  {
    "id": "tx_seed_704",
    "type": "expense",
    "amount": 40000,
    "date": "2026-04-10",
    "categoryId": "cat_entretenimento",
    "note": "Jaraguá",
    "createdAt": 1793543409452,
    "updatedAt": 1793543409452
  },
  {
    "id": "tx_seed_705",
    "type": "expense",
    "amount": 45000,
    "date": "2026-04-10",
    "categoryId": "cat_livros",
    "note": "Plotino",
    "createdAt": 1793543409453,
    "updatedAt": 1793543409453
  },
  {
    "id": "tx_seed_706",
    "type": "expense",
    "amount": 26500,
    "date": "2026-04-09",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409454,
    "updatedAt": 1793543409454
  },
  {
    "id": "tx_seed_707",
    "type": "expense",
    "amount": 3600,
    "date": "2026-04-09",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409455,
    "updatedAt": 1793543409455
  },
  {
    "id": "tx_seed_708",
    "type": "expense",
    "amount": 4800,
    "date": "2026-04-08",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409457,
    "updatedAt": 1793543409457
  },
  {
    "id": "tx_seed_709",
    "type": "expense",
    "amount": 4700,
    "date": "2026-04-08",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409458,
    "updatedAt": 1793543409458
  },
  {
    "id": "tx_seed_710",
    "type": "expense",
    "amount": 7000,
    "date": "2026-04-08",
    "categoryId": "cat_servi_os",
    "note": "Caixa postal",
    "createdAt": 1793543409459,
    "updatedAt": 1793543409459
  },
  {
    "id": "tx_seed_711",
    "type": "expense",
    "amount": 28500,
    "date": "2026-04-08",
    "categoryId": "cat_nova_acr_pole",
    "createdAt": 1793543409460,
    "updatedAt": 1793543409460
  },
  {
    "id": "tx_seed_712",
    "type": "income",
    "amount": 3175300,
    "date": "2026-04-08",
    "categoryId": "cat_sal_rio",
    "createdAt": 1793543409461,
    "updatedAt": 1793543409461
  },
  {
    "id": "tx_seed_713",
    "type": "expense",
    "amount": 4000,
    "date": "2026-04-07",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409462,
    "updatedAt": 1793543409462
  },
  {
    "id": "tx_seed_714",
    "type": "expense",
    "amount": 4500,
    "date": "2026-04-06",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409463,
    "updatedAt": 1793543409463
  },
  {
    "id": "tx_seed_715",
    "type": "expense",
    "amount": 19500,
    "date": "2026-04-06",
    "categoryId": "cat_carro",
    "createdAt": 1793543409464,
    "updatedAt": 1793543409464
  },
  {
    "id": "tx_seed_716",
    "type": "expense",
    "amount": 3600,
    "date": "2026-04-06",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409465,
    "updatedAt": 1793543409465
  },
  {
    "id": "tx_seed_717",
    "type": "expense",
    "amount": 5000,
    "date": "2026-04-06",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409466,
    "updatedAt": 1793543409466
  },
  {
    "id": "tx_seed_718",
    "type": "expense",
    "amount": 6000,
    "date": "2026-04-06",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409467,
    "updatedAt": 1793543409467
  },
  {
    "id": "tx_seed_719",
    "type": "expense",
    "amount": 174500,
    "date": "2026-04-05",
    "categoryId": "cat_aluguel",
    "createdAt": 1793543409468,
    "updatedAt": 1793543409468
  },
  {
    "id": "tx_seed_720",
    "type": "expense",
    "amount": 3000,
    "date": "2026-04-05",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409469,
    "updatedAt": 1793543409469
  },
  {
    "id": "tx_seed_721",
    "type": "expense",
    "amount": 3000,
    "date": "2026-04-05",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409470,
    "updatedAt": 1793543409470
  },
  {
    "id": "tx_seed_722",
    "type": "expense",
    "amount": 19500,
    "date": "2026-04-02",
    "categoryId": "cat_carro",
    "createdAt": 1793543409471,
    "updatedAt": 1793543409471
  },
  {
    "id": "tx_seed_723",
    "type": "expense",
    "amount": 31200,
    "date": "2026-04-02",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409472,
    "updatedAt": 1793543409472
  },
  {
    "id": "tx_seed_724",
    "type": "expense",
    "amount": 9800,
    "date": "2026-04-02",
    "categoryId": "cat_comida",
    "createdAt": 1793543409473,
    "updatedAt": 1793543409473
  },
  {
    "id": "tx_seed_725",
    "type": "expense",
    "amount": 21200,
    "date": "2026-04-02",
    "categoryId": "cat_casa",
    "note": "escova elétrica",
    "createdAt": 1793543409474,
    "updatedAt": 1793543409474
  },
  {
    "id": "tx_seed_726",
    "type": "expense",
    "amount": 9900,
    "date": "2026-04-02",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409475,
    "updatedAt": 1793543409475
  },
  {
    "id": "tx_seed_727",
    "type": "expense",
    "amount": 6000,
    "date": "2026-04-02",
    "categoryId": "cat_livros",
    "createdAt": 1793543409476,
    "updatedAt": 1793543409476
  },
  {
    "id": "tx_seed_728",
    "type": "expense",
    "amount": 3900,
    "date": "2026-04-01",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409477,
    "updatedAt": 1793543409477
  },
  {
    "id": "tx_seed_729",
    "type": "expense",
    "amount": 1400,
    "date": "2026-04-01",
    "categoryId": "cat_comida",
    "note": "Café da manhã",
    "createdAt": 1793543409478,
    "updatedAt": 1793543409478
  },
  {
    "id": "tx_seed_730",
    "type": "expense",
    "amount": 3600,
    "date": "2026-03-31",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409479,
    "updatedAt": 1793543409479
  },
  {
    "id": "tx_seed_731",
    "type": "expense",
    "amount": 3100,
    "date": "2026-03-31",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409480,
    "updatedAt": 1793543409480
  },
  {
    "id": "tx_seed_732",
    "type": "expense",
    "amount": 260000,
    "date": "2026-03-31",
    "categoryId": "cat_servi_os",
    "note": "faxineira",
    "createdAt": 1793543409481,
    "updatedAt": 1793543409481
  },
  {
    "id": "tx_seed_733",
    "type": "expense",
    "amount": 3100,
    "date": "2026-03-30",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409482,
    "updatedAt": 1793543409482
  },
  {
    "id": "tx_seed_734",
    "type": "expense",
    "amount": 3900,
    "date": "2026-03-30",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409483,
    "updatedAt": 1793543409483
  },
  {
    "id": "tx_seed_735",
    "type": "expense",
    "amount": 6000,
    "date": "2026-03-30",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409484,
    "updatedAt": 1793543409484
  },
  {
    "id": "tx_seed_736",
    "type": "expense",
    "amount": 10800,
    "date": "2026-03-28",
    "categoryId": "cat_comida",
    "createdAt": 1793543409485,
    "updatedAt": 1793543409485
  },
  {
    "id": "tx_seed_737",
    "type": "expense",
    "amount": 20000,
    "date": "2026-03-28",
    "categoryId": "cat_sa_de",
    "note": "podologia",
    "createdAt": 1793543409486,
    "updatedAt": 1793543409486
  },
  {
    "id": "tx_seed_738",
    "type": "expense",
    "amount": 19100,
    "date": "2026-03-27",
    "categoryId": "cat_carro",
    "createdAt": 1793543409487,
    "updatedAt": 1793543409487
  },
  {
    "id": "tx_seed_739",
    "type": "expense",
    "amount": 22100,
    "date": "2026-03-27",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409488,
    "updatedAt": 1793543409488
  },
  {
    "id": "tx_seed_740",
    "type": "expense",
    "amount": 8700,
    "date": "2026-03-27",
    "categoryId": "cat_comida",
    "createdAt": 1793543409489,
    "updatedAt": 1793543409489
  },
  {
    "id": "tx_seed_741",
    "type": "expense",
    "amount": 5500,
    "date": "2026-03-26",
    "categoryId": "cat_comida",
    "createdAt": 1793543409490,
    "updatedAt": 1793543409490
  },
  {
    "id": "tx_seed_742",
    "type": "expense",
    "amount": 35400,
    "date": "2026-03-26",
    "categoryId": "cat_aluguel",
    "createdAt": 1793543409491,
    "updatedAt": 1793543409491
  },
  {
    "id": "tx_seed_743",
    "type": "expense",
    "amount": 5000,
    "date": "2026-03-25",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409492,
    "updatedAt": 1793543409492
  },
  {
    "id": "tx_seed_744",
    "type": "expense",
    "amount": 4000,
    "date": "2026-03-25",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409493,
    "updatedAt": 1793543409493
  },
  {
    "id": "tx_seed_745",
    "type": "expense",
    "amount": 10000,
    "date": "2026-03-25",
    "categoryId": "cat_comida",
    "createdAt": 1793543409494,
    "updatedAt": 1793543409494
  },
  {
    "id": "tx_seed_746",
    "type": "expense",
    "amount": 3800,
    "date": "2026-03-24",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409495,
    "updatedAt": 1793543409495
  },
  {
    "id": "tx_seed_747",
    "type": "expense",
    "amount": 6500,
    "date": "2026-03-24",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409496,
    "updatedAt": 1793543409496
  },
  {
    "id": "tx_seed_748",
    "type": "expense",
    "amount": 300000,
    "date": "2026-03-24",
    "categoryId": "cat_bitcoin",
    "createdAt": 1793543409497,
    "updatedAt": 1793543409497
  },
  {
    "id": "tx_seed_749",
    "type": "expense",
    "amount": 5400,
    "date": "2026-03-24",
    "categoryId": "cat_uber",
    "createdAt": 1793543409498,
    "updatedAt": 1793543409498
  },
  {
    "id": "tx_seed_750",
    "type": "expense",
    "amount": 3000,
    "date": "2026-03-13",
    "categoryId": "cat_alimentos",
    "note": "café aeroporto",
    "createdAt": 1793543409499,
    "updatedAt": 1793543409499
  },
  {
    "id": "tx_seed_751",
    "type": "expense",
    "amount": 8000,
    "date": "2026-03-13",
    "categoryId": "cat_uber",
    "createdAt": 1793543409500,
    "updatedAt": 1793543409500
  },
  {
    "id": "tx_seed_752",
    "type": "expense",
    "amount": 4000,
    "date": "2026-03-13",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409501,
    "updatedAt": 1793543409501
  },
  {
    "id": "tx_seed_753",
    "type": "expense",
    "amount": 2100,
    "date": "2026-03-13",
    "categoryId": "cat_comida",
    "note": "Café da manhã",
    "createdAt": 1793543409502,
    "updatedAt": 1793543409502
  },
  {
    "id": "tx_seed_754",
    "type": "expense",
    "amount": 3900,
    "date": "2026-03-12",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409503,
    "updatedAt": 1793543409503
  },
  {
    "id": "tx_seed_755",
    "type": "expense",
    "amount": 4400,
    "date": "2026-03-12",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409504,
    "updatedAt": 1793543409504
  },
  {
    "id": "tx_seed_756",
    "type": "expense",
    "amount": 40000,
    "date": "2026-03-12",
    "categoryId": "cat_entretenimento",
    "note": "Jaraguá",
    "createdAt": 1793543409505,
    "updatedAt": 1793543409505
  },
  {
    "id": "tx_seed_757",
    "type": "expense",
    "amount": 15400,
    "date": "2026-03-11",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409506,
    "updatedAt": 1793543409506
  },
  {
    "id": "tx_seed_758",
    "type": "expense",
    "amount": 4200,
    "date": "2026-03-11",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409507,
    "updatedAt": 1793543409507
  },
  {
    "id": "tx_seed_759",
    "type": "expense",
    "amount": 4200,
    "date": "2026-03-11",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409508,
    "updatedAt": 1793543409508
  },
  {
    "id": "tx_seed_760",
    "type": "expense",
    "amount": 19000,
    "date": "2026-03-11",
    "categoryId": "cat_nova_acr_pole",
    "createdAt": 1793543409509,
    "updatedAt": 1793543409509
  },
  {
    "id": "tx_seed_761",
    "type": "expense",
    "amount": 3300,
    "date": "2026-03-10",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409510,
    "updatedAt": 1793543409510
  },
  {
    "id": "tx_seed_762",
    "type": "expense",
    "amount": 4700,
    "date": "2026-03-10",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409511,
    "updatedAt": 1793543409511
  },
  {
    "id": "tx_seed_763",
    "type": "expense",
    "amount": 4900,
    "date": "2026-03-10",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409512,
    "updatedAt": 1793543409512
  },
  {
    "id": "tx_seed_764",
    "type": "expense",
    "amount": 24300,
    "date": "2026-03-09",
    "categoryId": "cat_higiene",
    "createdAt": 1793543409513,
    "updatedAt": 1793543409513
  },
  {
    "id": "tx_seed_765",
    "type": "expense",
    "amount": 3800,
    "date": "2026-03-09",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409514,
    "updatedAt": 1793543409514
  },
  {
    "id": "tx_seed_766",
    "type": "expense",
    "amount": 4200,
    "date": "2026-03-09",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409515,
    "updatedAt": 1793543409515
  },
  {
    "id": "tx_seed_767",
    "type": "expense",
    "amount": 2600,
    "date": "2026-03-08",
    "categoryId": "cat_casa",
    "note": "ziplock",
    "createdAt": 1793543409516,
    "updatedAt": 1793543409516
  },
  {
    "id": "tx_seed_768",
    "type": "expense",
    "amount": 3100,
    "date": "2026-03-08",
    "categoryId": "cat_roupa",
    "note": "toalha de viagem",
    "createdAt": 1793543409517,
    "updatedAt": 1793543409517
  },
  {
    "id": "tx_seed_769",
    "type": "expense",
    "amount": 40000,
    "date": "2026-03-08",
    "categoryId": "cat_roupa",
    "note": "agasalho",
    "createdAt": 1793543409518,
    "updatedAt": 1793543409518
  },
  {
    "id": "tx_seed_770",
    "type": "expense",
    "amount": 11800,
    "date": "2026-03-08",
    "categoryId": "cat_comida",
    "createdAt": 1793543409519,
    "updatedAt": 1793543409519
  },
  {
    "id": "tx_seed_771",
    "type": "expense",
    "amount": 16200,
    "date": "2026-03-08",
    "categoryId": "cat_carro",
    "createdAt": 1793543409520,
    "updatedAt": 1793543409520
  },
  {
    "id": "tx_seed_772",
    "type": "expense",
    "amount": 3300,
    "date": "2026-03-06",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409521,
    "updatedAt": 1793543409521
  },
  {
    "id": "tx_seed_773",
    "type": "income",
    "amount": 2318700,
    "date": "2026-03-06",
    "categoryId": "cat_sal_rio",
    "createdAt": 1793543409522,
    "updatedAt": 1793543409522
  },
  {
    "id": "tx_seed_774",
    "type": "expense",
    "amount": 4300,
    "date": "2026-03-06",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409523,
    "updatedAt": 1793543409523
  },
  {
    "id": "tx_seed_775",
    "type": "expense",
    "amount": 35900,
    "date": "2026-03-06",
    "categoryId": "cat_aluguel",
    "createdAt": 1793543409524,
    "updatedAt": 1793543409524
  },
  {
    "id": "tx_seed_776",
    "type": "expense",
    "amount": 7000,
    "date": "2026-03-06",
    "categoryId": "cat_servi_os",
    "note": "box100",
    "createdAt": 1793543409525,
    "updatedAt": 1793543409525
  },
  {
    "id": "tx_seed_777",
    "type": "expense",
    "amount": 28500,
    "date": "2026-03-06",
    "categoryId": "cat_nova_acr_pole",
    "createdAt": 1793543409526,
    "updatedAt": 1793543409526
  },
  {
    "id": "tx_seed_778",
    "type": "expense",
    "amount": 25600,
    "date": "2026-03-05",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409527,
    "updatedAt": 1793543409527
  },
  {
    "id": "tx_seed_779",
    "type": "expense",
    "amount": 17000,
    "date": "2026-03-05",
    "categoryId": "cat_carro",
    "createdAt": 1793543409528,
    "updatedAt": 1793543409528
  },
  {
    "id": "tx_seed_780",
    "type": "expense",
    "amount": 3500,
    "date": "2026-03-05",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409529,
    "updatedAt": 1793543409529
  },
  {
    "id": "tx_seed_781",
    "type": "expense",
    "amount": 5000,
    "date": "2026-03-05",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409530,
    "updatedAt": 1793543409530
  },
  {
    "id": "tx_seed_782",
    "type": "expense",
    "amount": 174500,
    "date": "2026-03-04",
    "categoryId": "cat_aluguel",
    "createdAt": 1793543409531,
    "updatedAt": 1793543409531
  },
  {
    "id": "tx_seed_783",
    "type": "expense",
    "amount": 3500,
    "date": "2026-03-04",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409532,
    "updatedAt": 1793543409532
  },
  {
    "id": "tx_seed_784",
    "type": "expense",
    "amount": 4900,
    "date": "2026-03-04",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409533,
    "updatedAt": 1793543409533
  },
  {
    "id": "tx_seed_785",
    "type": "expense",
    "amount": 80000,
    "date": "2026-03-04",
    "categoryId": "cat_servi_os",
    "note": "faxineira",
    "createdAt": 1793543409534,
    "updatedAt": 1793543409534
  },
  {
    "id": "tx_seed_786",
    "type": "expense",
    "amount": 4500,
    "date": "2026-03-03",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409535,
    "updatedAt": 1793543409535
  },
  {
    "id": "tx_seed_787",
    "type": "expense",
    "amount": 3700,
    "date": "2026-03-03",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409536,
    "updatedAt": 1793543409536
  },
  {
    "id": "tx_seed_788",
    "type": "expense",
    "amount": 8400,
    "date": "2026-03-02",
    "categoryId": "cat_casa",
    "note": "caixa organizadora",
    "createdAt": 1793543409537,
    "updatedAt": 1793543409537
  },
  {
    "id": "tx_seed_789",
    "type": "expense",
    "amount": 75000,
    "date": "2026-03-02",
    "categoryId": "cat_roupa",
    "note": "roupa Egito",
    "createdAt": 1793543409538,
    "updatedAt": 1793543409538
  },
  {
    "id": "tx_seed_790",
    "type": "expense",
    "amount": 3400,
    "date": "2026-03-02",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409539,
    "updatedAt": 1793543409539
  },
  {
    "id": "tx_seed_791",
    "type": "expense",
    "amount": 6700,
    "date": "2026-03-02",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409540,
    "updatedAt": 1793543409540
  },
  {
    "id": "tx_seed_792",
    "type": "expense",
    "amount": 4000,
    "date": "2026-03-02",
    "categoryId": "cat_hardware",
    "note": "fone",
    "createdAt": 1793543409541,
    "updatedAt": 1793543409541
  },
  {
    "id": "tx_seed_793",
    "type": "expense",
    "amount": 3000,
    "date": "2026-03-01",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409542,
    "updatedAt": 1793543409542
  },
  {
    "id": "tx_seed_794",
    "type": "expense",
    "amount": 3900,
    "date": "2026-03-01",
    "categoryId": "cat_uber",
    "createdAt": 1793543409543,
    "updatedAt": 1793543409543
  },
  {
    "id": "tx_seed_795",
    "type": "expense",
    "amount": 3900,
    "date": "2026-03-01",
    "categoryId": "cat_uber",
    "createdAt": 1793543409544,
    "updatedAt": 1793543409544
  },
  {
    "id": "tx_seed_796",
    "type": "expense",
    "amount": 245900,
    "date": "2026-03-01",
    "categoryId": "cat_carro",
    "note": "assinatura",
    "createdAt": 1793543409545,
    "updatedAt": 1793543409545
  },
  {
    "id": "tx_seed_797",
    "type": "expense",
    "amount": 5500,
    "date": "2026-02-28",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409546,
    "updatedAt": 1793543409546
  },
  {
    "id": "tx_seed_798",
    "type": "expense",
    "amount": 7100,
    "date": "2026-02-28",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409547,
    "updatedAt": 1793543409547
  },
  {
    "id": "tx_seed_799",
    "type": "expense",
    "amount": 13100,
    "date": "2026-02-27",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409548,
    "updatedAt": 1793543409548
  },
  {
    "id": "tx_seed_800",
    "type": "expense",
    "amount": 27600,
    "date": "2026-02-27",
    "categoryId": "cat_alimentos",
    "note": "lowcarb",
    "createdAt": 1793543409549,
    "updatedAt": 1793543409549
  },
  {
    "id": "tx_seed_801",
    "type": "expense",
    "amount": 4400,
    "date": "2026-02-27",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409550,
    "updatedAt": 1793543409550
  },
  {
    "id": "tx_seed_802",
    "type": "expense",
    "amount": 4900,
    "date": "2026-02-27",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409551,
    "updatedAt": 1793543409551
  },
  {
    "id": "tx_seed_803",
    "type": "expense",
    "amount": 12000,
    "date": "2026-02-27",
    "categoryId": "cat_internet",
    "note": "Google",
    "createdAt": 1793543409552,
    "updatedAt": 1793543409552
  },
  {
    "id": "tx_seed_804",
    "type": "expense",
    "amount": 1900,
    "date": "2026-02-27",
    "categoryId": "cat_comida",
    "note": "Café da manhã",
    "createdAt": 1793543409553,
    "updatedAt": 1793543409553
  },
  {
    "id": "tx_seed_805",
    "type": "expense",
    "amount": 18500,
    "date": "2026-02-26",
    "categoryId": "cat_carro",
    "createdAt": 1793543409554,
    "updatedAt": 1793543409554
  },
  {
    "id": "tx_seed_806",
    "type": "expense",
    "amount": 3200,
    "date": "2026-02-26",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409555,
    "updatedAt": 1793543409555
  },
  {
    "id": "tx_seed_807",
    "type": "expense",
    "amount": 3600,
    "date": "2026-02-26",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409556,
    "updatedAt": 1793543409556
  },
  {
    "id": "tx_seed_808",
    "type": "expense",
    "amount": 6500,
    "date": "2026-02-26",
    "categoryId": "cat_hardware",
    "note": "despertador de cabeceira",
    "createdAt": 1793543409557,
    "updatedAt": 1793543409557
  },
  {
    "id": "tx_seed_809",
    "type": "expense",
    "amount": 3700,
    "date": "2026-02-25",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409558,
    "updatedAt": 1793543409558
  },
  {
    "id": "tx_seed_810",
    "type": "expense",
    "amount": 4500,
    "date": "2026-02-25",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409559,
    "updatedAt": 1793543409559
  },
  {
    "id": "tx_seed_811",
    "type": "expense",
    "amount": 16700,
    "date": "2026-02-24",
    "categoryId": "cat_supermercado",
    "createdAt": 1793543409560,
    "updatedAt": 1793543409560
  },
  {
    "id": "tx_seed_812",
    "type": "expense",
    "amount": 2300,
    "date": "2026-02-24",
    "categoryId": "cat_roupa",
    "note": "cinto",
    "createdAt": 1793543409561,
    "updatedAt": 1793543409561
  },
  {
    "id": "tx_seed_813",
    "type": "expense",
    "amount": 3200,
    "date": "2026-02-24",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409562,
    "updatedAt": 1793543409562
  },
  {
    "id": "tx_seed_814",
    "type": "expense",
    "amount": 1800,
    "date": "2026-02-24",
    "categoryId": "cat_comida",
    "note": "Café da manhã",
    "createdAt": 1793543409563,
    "updatedAt": 1793543409563
  },
  {
    "id": "tx_seed_815",
    "type": "expense",
    "amount": 3800,
    "date": "2026-02-24",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409564,
    "updatedAt": 1793543409564
  },
  {
    "id": "tx_seed_816",
    "type": "expense",
    "amount": 2900,
    "date": "2026-02-24",
    "categoryId": "cat_roupa",
    "note": "cintos",
    "createdAt": 1793543409565,
    "updatedAt": 1793543409565
  },
  {
    "id": "tx_seed_817",
    "type": "expense",
    "amount": 3800,
    "date": "2026-02-23",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409566,
    "updatedAt": 1793543409566
  },
  {
    "id": "tx_seed_818",
    "type": "expense",
    "amount": 3000,
    "date": "2026-02-23",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409567,
    "updatedAt": 1793543409567
  },
  {
    "id": "tx_seed_819",
    "type": "expense",
    "amount": 4500,
    "date": "2026-02-22",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409568,
    "updatedAt": 1793543409568
  },
  {
    "id": "tx_seed_820",
    "type": "expense",
    "amount": 13000,
    "date": "2026-02-22",
    "categoryId": "cat_comida",
    "createdAt": 1793543409569,
    "updatedAt": 1793543409569
  },
  {
    "id": "tx_seed_821",
    "type": "expense",
    "amount": 8000,
    "date": "2026-02-21",
    "categoryId": "cat_comida",
    "createdAt": 1793543409570,
    "updatedAt": 1793543409570
  },
  {
    "id": "tx_seed_822",
    "type": "expense",
    "amount": 28000,
    "date": "2026-02-21",
    "categoryId": "cat_sa_de",
    "note": "podologia",
    "createdAt": 1793543409571,
    "updatedAt": 1793543409571
  },
  {
    "id": "tx_seed_823",
    "type": "expense",
    "amount": 4000,
    "date": "2026-02-20",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409572,
    "updatedAt": 1793543409572
  },
  {
    "id": "tx_seed_824",
    "type": "expense",
    "amount": 4200,
    "date": "2026-02-20",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409573,
    "updatedAt": 1793543409573
  },
  {
    "id": "tx_seed_825",
    "type": "expense",
    "amount": 3300,
    "date": "2026-02-19",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409574,
    "updatedAt": 1793543409574
  },
  {
    "id": "tx_seed_826",
    "type": "expense",
    "amount": 3400,
    "date": "2026-02-19",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409575,
    "updatedAt": 1793543409575
  },
  {
    "id": "tx_seed_827",
    "type": "expense",
    "amount": 4700,
    "date": "2026-02-19",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409576,
    "updatedAt": 1793543409576
  },
  {
    "id": "tx_seed_828",
    "type": "expense",
    "amount": 6400,
    "date": "2026-02-18",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409577,
    "updatedAt": 1793543409577
  },
  {
    "id": "tx_seed_829",
    "type": "expense",
    "amount": 14800,
    "date": "2026-02-18",
    "categoryId": "cat_comida",
    "createdAt": 1793543409578,
    "updatedAt": 1793543409578
  },
  {
    "id": "tx_seed_830",
    "type": "expense",
    "amount": 17800,
    "date": "2026-02-18",
    "categoryId": "cat_carro",
    "createdAt": 1793543409579,
    "updatedAt": 1793543409579
  },
  {
    "id": "tx_seed_831",
    "type": "expense",
    "amount": 4000,
    "date": "2026-02-17",
    "categoryId": "cat_internet",
    "note": "domínio",
    "createdAt": 1793543409580,
    "updatedAt": 1793543409580
  },
  {
    "id": "tx_seed_832",
    "type": "expense",
    "amount": 9000,
    "date": "2026-02-17",
    "categoryId": "cat_comida",
    "createdAt": 1793543409581,
    "updatedAt": 1793543409581
  },
  {
    "id": "tx_seed_833",
    "type": "expense",
    "amount": 4900,
    "date": "2026-02-17",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409582,
    "updatedAt": 1793543409582
  },
  {
    "id": "tx_seed_834",
    "type": "expense",
    "amount": 6900,
    "date": "2026-02-17",
    "categoryId": "cat_uber",
    "createdAt": 1793543409584,
    "updatedAt": 1793543409584
  },
  {
    "id": "tx_seed_835",
    "type": "expense",
    "amount": 15800,
    "date": "2026-02-16",
    "categoryId": "cat_transporte",
    "note": "buser",
    "createdAt": 1793543409585,
    "updatedAt": 1793543409585
  },
  {
    "id": "tx_seed_836",
    "type": "expense",
    "amount": 24000,
    "date": "2026-02-16",
    "categoryId": "cat_transporte",
    "createdAt": 1793543409586,
    "updatedAt": 1793543409586
  },
  {
    "id": "tx_seed_837",
    "type": "expense",
    "amount": 5700,
    "date": "2026-02-16",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409587,
    "updatedAt": 1793543409587
  },
  {
    "id": "tx_seed_838",
    "type": "expense",
    "amount": 13000,
    "date": "2026-02-13",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409588,
    "updatedAt": 1793543409588
  },
  {
    "id": "tx_seed_839",
    "type": "expense",
    "amount": 3800,
    "date": "2026-02-13",
    "categoryId": "cat_uber",
    "createdAt": 1793543409589,
    "updatedAt": 1793543409589
  },
  {
    "id": "tx_seed_840",
    "type": "expense",
    "amount": 4100,
    "date": "2026-02-13",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409590,
    "updatedAt": 1793543409590
  },
  {
    "id": "tx_seed_841",
    "type": "expense",
    "amount": 17100,
    "date": "2026-02-12",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409591,
    "updatedAt": 1793543409591
  },
  {
    "id": "tx_seed_842",
    "type": "expense",
    "amount": 3200,
    "date": "2026-02-12",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409592,
    "updatedAt": 1793543409592
  },
  {
    "id": "tx_seed_843",
    "type": "expense",
    "amount": 3600,
    "date": "2026-02-12",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409593,
    "updatedAt": 1793543409593
  },
  {
    "id": "tx_seed_844",
    "type": "expense",
    "amount": 2500,
    "date": "2026-02-12",
    "categoryId": "cat_educa__o",
    "createdAt": 1793543409594,
    "updatedAt": 1793543409594
  },
  {
    "id": "tx_seed_845",
    "type": "expense",
    "amount": 2800,
    "date": "2026-02-11",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409595,
    "updatedAt": 1793543409595
  },
  {
    "id": "tx_seed_846",
    "type": "expense",
    "amount": 3900,
    "date": "2026-02-11",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409596,
    "updatedAt": 1793543409596
  },
  {
    "id": "tx_seed_847",
    "type": "expense",
    "amount": 5300,
    "date": "2026-02-11",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409597,
    "updatedAt": 1793543409597
  },
  {
    "id": "tx_seed_848",
    "type": "expense",
    "amount": 5000,
    "date": "2026-02-10",
    "categoryId": "cat_sa_de",
    "note": "cabelo",
    "createdAt": 1793543409598,
    "updatedAt": 1793543409598
  },
  {
    "id": "tx_seed_849",
    "type": "expense",
    "amount": 3300,
    "date": "2026-02-10",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409599,
    "updatedAt": 1793543409599
  },
  {
    "id": "tx_seed_850",
    "type": "expense",
    "amount": 4100,
    "date": "2026-02-10",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409600,
    "updatedAt": 1793543409600
  },
  {
    "id": "tx_seed_851",
    "type": "expense",
    "amount": 48000,
    "date": "2026-02-10",
    "categoryId": "cat_nova_acr_pole",
    "note": "diárias carnaval",
    "createdAt": 1793543409601,
    "updatedAt": 1793543409601
  },
  {
    "id": "tx_seed_852",
    "type": "expense",
    "amount": 58700,
    "date": "2026-02-09",
    "categoryId": "cat_aluguel",
    "note": "IPTU",
    "createdAt": 1793543409602,
    "updatedAt": 1793543409602
  },
  {
    "id": "tx_seed_853",
    "type": "expense",
    "amount": 3600,
    "date": "2026-02-09",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409603,
    "updatedAt": 1793543409603
  },
  {
    "id": "tx_seed_854",
    "type": "expense",
    "amount": 3900,
    "date": "2026-02-09",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409604,
    "updatedAt": 1793543409604
  },
  {
    "id": "tx_seed_855",
    "type": "expense",
    "amount": 300000,
    "date": "2026-02-08",
    "categoryId": "cat_bitcoin",
    "createdAt": 1793543409605,
    "updatedAt": 1793543409605
  },
  {
    "id": "tx_seed_856",
    "type": "expense",
    "amount": 19600,
    "date": "2026-02-08",
    "categoryId": "cat_hardware",
    "createdAt": 1793543409606,
    "updatedAt": 1793543409606
  },
  {
    "id": "tx_seed_857",
    "type": "expense",
    "amount": 6500,
    "date": "2026-02-08",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409607,
    "updatedAt": 1793543409607
  },
  {
    "id": "tx_seed_858",
    "type": "expense",
    "amount": 12500,
    "date": "2026-02-08",
    "categoryId": "cat_comida",
    "createdAt": 1793543409608,
    "updatedAt": 1793543409608
  },
  {
    "id": "tx_seed_859",
    "type": "expense",
    "amount": 12700,
    "date": "2026-02-07",
    "categoryId": "cat_comida",
    "createdAt": 1793543409609,
    "updatedAt": 1793543409609
  },
  {
    "id": "tx_seed_860",
    "type": "expense",
    "amount": 17000,
    "date": "2026-02-07",
    "categoryId": "cat_livros",
    "createdAt": 1793543409610,
    "updatedAt": 1793543409610
  },
  {
    "id": "tx_seed_861",
    "type": "expense",
    "amount": 8400,
    "date": "2026-02-06",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409611,
    "updatedAt": 1793543409611
  },
  {
    "id": "tx_seed_862",
    "type": "expense",
    "amount": 20700,
    "date": "2026-02-06",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409612,
    "updatedAt": 1793543409612
  },
  {
    "id": "tx_seed_863",
    "type": "expense",
    "amount": 22000,
    "date": "2026-02-06",
    "categoryId": "cat_carro",
    "createdAt": 1793543409613,
    "updatedAt": 1793543409613
  },
  {
    "id": "tx_seed_864",
    "type": "expense",
    "amount": 4700,
    "date": "2026-02-06",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409614,
    "updatedAt": 1793543409614
  },
  {
    "id": "tx_seed_865",
    "type": "income",
    "amount": 2216400,
    "date": "2026-02-06",
    "categoryId": "cat_sal_rio",
    "createdAt": 1793543409615,
    "updatedAt": 1793543409615
  },
  {
    "id": "tx_seed_866",
    "type": "expense",
    "amount": 4300,
    "date": "2026-02-06",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409616,
    "updatedAt": 1793543409616
  },
  {
    "id": "tx_seed_867",
    "type": "expense",
    "amount": 1900,
    "date": "2026-02-05",
    "categoryId": "cat_casa",
    "createdAt": 1793543409617,
    "updatedAt": 1793543409617
  },
  {
    "id": "tx_seed_868",
    "type": "expense",
    "amount": 3500,
    "date": "2026-02-05",
    "categoryId": "cat_hardware",
    "note": "mouse",
    "createdAt": 1793543409618,
    "updatedAt": 1793543409618
  },
  {
    "id": "tx_seed_869",
    "type": "expense",
    "amount": 3000,
    "date": "2026-02-05",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409619,
    "updatedAt": 1793543409619
  },
  {
    "id": "tx_seed_870",
    "type": "expense",
    "amount": 4100,
    "date": "2026-02-05",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409620,
    "updatedAt": 1793543409620
  },
  {
    "id": "tx_seed_871",
    "type": "expense",
    "amount": 3600,
    "date": "2026-02-04",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409621,
    "updatedAt": 1793543409621
  },
  {
    "id": "tx_seed_872",
    "type": "expense",
    "amount": 4100,
    "date": "2026-02-04",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409622,
    "updatedAt": 1793543409622
  },
  {
    "id": "tx_seed_873",
    "type": "expense",
    "amount": 6800,
    "date": "2026-02-03",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409623,
    "updatedAt": 1793543409623
  },
  {
    "id": "tx_seed_874",
    "type": "expense",
    "amount": 3600,
    "date": "2026-02-03",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409624,
    "updatedAt": 1793543409624
  },
  {
    "id": "tx_seed_875",
    "type": "expense",
    "amount": 4100,
    "date": "2026-02-03",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409625,
    "updatedAt": 1793543409625
  },
  {
    "id": "tx_seed_876",
    "type": "expense",
    "amount": 28500,
    "date": "2026-02-03",
    "categoryId": "cat_nova_acr_pole",
    "createdAt": 1793543409626,
    "updatedAt": 1793543409626
  },
  {
    "id": "tx_seed_877",
    "type": "expense",
    "amount": 3400,
    "date": "2026-02-02",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409627,
    "updatedAt": 1793543409627
  },
  {
    "id": "tx_seed_878",
    "type": "expense",
    "amount": 4800,
    "date": "2026-02-02",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409628,
    "updatedAt": 1793543409628
  },
  {
    "id": "tx_seed_879",
    "type": "expense",
    "amount": 3000,
    "date": "2026-02-02",
    "categoryId": "cat_alimentos",
    "note": "café",
    "createdAt": 1793543409629,
    "updatedAt": 1793543409629
  },
  {
    "id": "tx_seed_880",
    "type": "expense",
    "amount": 4000,
    "date": "2026-02-02",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409630,
    "updatedAt": 1793543409630
  },
  {
    "id": "tx_seed_881",
    "type": "expense",
    "amount": 10100,
    "date": "2026-02-01",
    "categoryId": "cat_comida",
    "createdAt": 1793543409631,
    "updatedAt": 1793543409631
  },
  {
    "id": "tx_seed_882",
    "type": "expense",
    "amount": 245900,
    "date": "2026-02-01",
    "categoryId": "cat_carro",
    "createdAt": 1793543409632,
    "updatedAt": 1793543409632
  },
  {
    "id": "tx_seed_883",
    "type": "expense",
    "amount": 7000,
    "date": "2026-01-31",
    "categoryId": "cat_servi_os",
    "note": "box100",
    "createdAt": 1793543409633,
    "updatedAt": 1793543409633
  },
  {
    "id": "tx_seed_884",
    "type": "expense",
    "amount": 14500,
    "date": "2026-01-31",
    "categoryId": "cat_comida",
    "createdAt": 1793543409634,
    "updatedAt": 1793543409634
  },
  {
    "id": "tx_seed_885",
    "type": "expense",
    "amount": 18800,
    "date": "2026-01-31",
    "categoryId": "cat_alimentos",
    "note": "lowcarb",
    "createdAt": 1793543409635,
    "updatedAt": 1793543409635
  },
  {
    "id": "tx_seed_886",
    "type": "expense",
    "amount": 31200,
    "date": "2026-01-31",
    "categoryId": "cat_casa",
    "createdAt": 1793543409636,
    "updatedAt": 1793543409636
  },
  {
    "id": "tx_seed_887",
    "type": "expense",
    "amount": 4000,
    "date": "2026-01-30",
    "categoryId": "cat_alimentos",
    "note": "queijo",
    "createdAt": 1793543409637,
    "updatedAt": 1793543409637
  },
  {
    "id": "tx_seed_888",
    "type": "expense",
    "amount": 3600,
    "date": "2026-01-30",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409638,
    "updatedAt": 1793543409638
  },
  {
    "id": "tx_seed_889",
    "type": "expense",
    "amount": 5200,
    "date": "2026-01-30",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409639,
    "updatedAt": 1793543409639
  },
  {
    "id": "tx_seed_890",
    "type": "expense",
    "amount": 19700,
    "date": "2026-01-30",
    "categoryId": "cat_carro",
    "createdAt": 1793543409640,
    "updatedAt": 1793543409640
  },
  {
    "id": "tx_seed_891",
    "type": "expense",
    "amount": 4000,
    "date": "2026-01-28",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409641,
    "updatedAt": 1793543409641
  },
  {
    "id": "tx_seed_892",
    "type": "expense",
    "amount": 4000,
    "date": "2026-01-28",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409642,
    "updatedAt": 1793543409642
  },
  {
    "id": "tx_seed_893",
    "type": "expense",
    "amount": 3300,
    "date": "2026-01-28",
    "categoryId": "cat_educa__o",
    "note": "udemy antigravity",
    "createdAt": 1793543409643,
    "updatedAt": 1793543409643
  },
  {
    "id": "tx_seed_894",
    "type": "expense",
    "amount": 5800,
    "date": "2026-01-27",
    "categoryId": "cat_comida",
    "createdAt": 1793543409644,
    "updatedAt": 1793543409644
  },
  {
    "id": "tx_seed_895",
    "type": "expense",
    "amount": 4500,
    "date": "2026-01-27",
    "categoryId": "cat_comida",
    "createdAt": 1793543409645,
    "updatedAt": 1793543409645
  },
  {
    "id": "tx_seed_896",
    "type": "expense",
    "amount": 3400,
    "date": "2026-01-27",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409646,
    "updatedAt": 1793543409646
  },
  {
    "id": "tx_seed_897",
    "type": "expense",
    "amount": 4000,
    "date": "2026-01-27",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409647,
    "updatedAt": 1793543409647
  },
  {
    "id": "tx_seed_898",
    "type": "expense",
    "amount": 2500,
    "date": "2026-01-27",
    "categoryId": "cat_livros",
    "createdAt": 1793543409648,
    "updatedAt": 1793543409648
  },
  {
    "id": "tx_seed_899",
    "type": "expense",
    "amount": 4800,
    "date": "2026-01-27",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409649,
    "updatedAt": 1793543409649
  },
  {
    "id": "tx_seed_900",
    "type": "expense",
    "amount": 3200,
    "date": "2026-01-26",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409650,
    "updatedAt": 1793543409650
  },
  {
    "id": "tx_seed_901",
    "type": "expense",
    "amount": 4200,
    "date": "2026-01-26",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409651,
    "updatedAt": 1793543409651
  },
  {
    "id": "tx_seed_902",
    "type": "expense",
    "amount": 174400,
    "date": "2026-01-26",
    "categoryId": "cat_aluguel",
    "createdAt": 1793543409652,
    "updatedAt": 1793543409652
  },
  {
    "id": "tx_seed_903",
    "type": "expense",
    "amount": 25100,
    "date": "2026-01-26",
    "categoryId": "cat_servi_os",
    "note": "CEMIG",
    "createdAt": 1793543409653,
    "updatedAt": 1793543409653
  },
  {
    "id": "tx_seed_904",
    "type": "expense",
    "amount": 13500,
    "date": "2026-01-25",
    "categoryId": "cat_comida",
    "createdAt": 1793543409654,
    "updatedAt": 1793543409654
  },
  {
    "id": "tx_seed_905",
    "type": "expense",
    "amount": 6700,
    "date": "2026-01-24",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409655,
    "updatedAt": 1793543409655
  },
  {
    "id": "tx_seed_906",
    "type": "expense",
    "amount": 12700,
    "date": "2026-01-24",
    "categoryId": "cat_comida",
    "createdAt": 1793543409656,
    "updatedAt": 1793543409656
  },
  {
    "id": "tx_seed_907",
    "type": "expense",
    "amount": 17000,
    "date": "2026-01-23",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409657,
    "updatedAt": 1793543409657
  },
  {
    "id": "tx_seed_908",
    "type": "expense",
    "amount": 21795,
    "date": "2026-01-23",
    "categoryId": "cat_carro",
    "createdAt": 1793543409658,
    "updatedAt": 1793543409658
  },
  {
    "id": "tx_seed_909",
    "type": "expense",
    "amount": 4600,
    "date": "2026-01-23",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409659,
    "updatedAt": 1793543409659
  },
  {
    "id": "tx_seed_910",
    "type": "expense",
    "amount": 4800,
    "date": "2026-01-23",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409660,
    "updatedAt": 1793543409660
  },
  {
    "id": "tx_seed_911",
    "type": "expense",
    "amount": 36600,
    "date": "2026-01-23",
    "categoryId": "cat_aluguel",
    "note": "condomínio",
    "createdAt": 1793543409661,
    "updatedAt": 1793543409661
  },
  {
    "id": "tx_seed_912",
    "type": "expense",
    "amount": 3200,
    "date": "2026-01-22",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409662,
    "updatedAt": 1793543409662
  },
  {
    "id": "tx_seed_913",
    "type": "expense",
    "amount": 5000,
    "date": "2026-01-22",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409663,
    "updatedAt": 1793543409663
  },
  {
    "id": "tx_seed_914",
    "type": "expense",
    "amount": 34600,
    "date": "2026-01-22",
    "categoryId": "cat_casa",
    "createdAt": 1793543409664,
    "updatedAt": 1793543409664
  },
  {
    "id": "tx_seed_915",
    "type": "expense",
    "amount": 4100,
    "date": "2026-01-21",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409665,
    "updatedAt": 1793543409665
  },
  {
    "id": "tx_seed_916",
    "type": "expense",
    "amount": 4300,
    "date": "2026-01-21",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409666,
    "updatedAt": 1793543409666
  },
  {
    "id": "tx_seed_917",
    "type": "expense",
    "amount": 80000,
    "date": "2026-01-21",
    "categoryId": "cat_servi_os",
    "note": "faxineira",
    "createdAt": 1793543409667,
    "updatedAt": 1793543409667
  },
  {
    "id": "tx_seed_918",
    "type": "expense",
    "amount": 12500,
    "date": "2026-01-20",
    "categoryId": "cat_hardware",
    "createdAt": 1793543409668,
    "updatedAt": 1793543409668
  },
  {
    "id": "tx_seed_919",
    "type": "expense",
    "amount": 3500,
    "date": "2026-01-20",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409669,
    "updatedAt": 1793543409669
  },
  {
    "id": "tx_seed_920",
    "type": "expense",
    "amount": 4000,
    "date": "2026-01-20",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409670,
    "updatedAt": 1793543409670
  },
  {
    "id": "tx_seed_921",
    "type": "expense",
    "amount": 7500,
    "date": "2026-01-20",
    "categoryId": "cat_livros",
    "createdAt": 1793543409671,
    "updatedAt": 1793543409671
  },
  {
    "id": "tx_seed_922",
    "type": "expense",
    "amount": 9100,
    "date": "2026-01-20",
    "categoryId": "cat_casa",
    "note": "filtro de café",
    "createdAt": 1793543409672,
    "updatedAt": 1793543409672
  },
  {
    "id": "tx_seed_923",
    "type": "expense",
    "amount": 5700,
    "date": "2026-01-19",
    "categoryId": "cat_comida",
    "createdAt": 1793543409673,
    "updatedAt": 1793543409673
  },
  {
    "id": "tx_seed_924",
    "type": "expense",
    "amount": 13200,
    "date": "2026-01-18",
    "categoryId": "cat_comida",
    "createdAt": 1793543409674,
    "updatedAt": 1793543409674
  },
  {
    "id": "tx_seed_925",
    "type": "expense",
    "amount": 8800,
    "date": "2026-01-17",
    "categoryId": "cat_comida",
    "createdAt": 1793543409675,
    "updatedAt": 1793543409675
  },
  {
    "id": "tx_seed_926",
    "type": "expense",
    "amount": 8700,
    "date": "2026-01-16",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409676,
    "updatedAt": 1793543409676
  },
  {
    "id": "tx_seed_927",
    "type": "expense",
    "amount": 3500,
    "date": "2026-01-16",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409677,
    "updatedAt": 1793543409677
  },
  {
    "id": "tx_seed_928",
    "type": "expense",
    "amount": 4700,
    "date": "2026-01-16",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409678,
    "updatedAt": 1793543409678
  },
  {
    "id": "tx_seed_929",
    "type": "expense",
    "amount": 21600,
    "date": "2026-01-16",
    "categoryId": "cat_alimentos",
    "note": "lowcarb",
    "createdAt": 1793543409679,
    "updatedAt": 1793543409679
  },
  {
    "id": "tx_seed_930",
    "type": "expense",
    "amount": 19400,
    "date": "2026-01-15",
    "categoryId": "cat_carro",
    "createdAt": 1793543409680,
    "updatedAt": 1793543409680
  },
  {
    "id": "tx_seed_931",
    "type": "expense",
    "amount": 19700,
    "date": "2026-01-09",
    "categoryId": "cat_alimentos",
    "note": "café",
    "createdAt": 1793543409681,
    "updatedAt": 1793543409681
  },
  {
    "id": "tx_seed_932",
    "type": "expense",
    "amount": 40000,
    "date": "2026-01-09",
    "categoryId": "cat_nova_acr_pole",
    "note": "propaganda",
    "createdAt": 1793543409682,
    "updatedAt": 1793543409682
  },
  {
    "id": "tx_seed_933",
    "type": "expense",
    "amount": 20000,
    "date": "2026-01-09",
    "categoryId": "cat_sa_de",
    "note": "podologia",
    "createdAt": 1793543409683,
    "updatedAt": 1793543409683
  },
  {
    "id": "tx_seed_934",
    "type": "expense",
    "amount": 3800,
    "date": "2026-01-08",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409684,
    "updatedAt": 1793543409684
  },
  {
    "id": "tx_seed_935",
    "type": "expense",
    "amount": 5500,
    "date": "2026-01-08",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409685,
    "updatedAt": 1793543409685
  },
  {
    "id": "tx_seed_936",
    "type": "expense",
    "amount": 4800,
    "date": "2026-01-08",
    "categoryId": "cat_alimentos",
    "note": "drogaria",
    "createdAt": 1793543409686,
    "updatedAt": 1793543409686
  },
  {
    "id": "tx_seed_937",
    "type": "expense",
    "amount": 7200,
    "date": "2026-01-08",
    "categoryId": "cat_alimentos",
    "note": "padaria",
    "createdAt": 1793543409687,
    "updatedAt": 1793543409687
  },
  {
    "id": "tx_seed_938",
    "type": "expense",
    "amount": 18600,
    "date": "2026-01-08",
    "categoryId": "cat_alimentos",
    "note": "lowcarb",
    "createdAt": 1793543409688,
    "updatedAt": 1793543409688
  },
  {
    "id": "tx_seed_939",
    "type": "expense",
    "amount": 355000,
    "date": "2026-01-08",
    "categoryId": "cat_viagem",
    "createdAt": 1793543409689,
    "updatedAt": 1793543409689
  },
  {
    "id": "tx_seed_940",
    "type": "expense",
    "amount": 13500,
    "date": "2026-01-08",
    "categoryId": "cat_hardware",
    "note": "smartwatch",
    "createdAt": 1793543409690,
    "updatedAt": 1793543409690
  },
  {
    "id": "tx_seed_941",
    "type": "expense",
    "amount": 300000,
    "date": "2026-01-08",
    "categoryId": "cat_bitcoin",
    "createdAt": 1793543409691,
    "updatedAt": 1793543409691
  },
  {
    "id": "tx_seed_942",
    "type": "income",
    "amount": 2342300,
    "date": "2026-01-08",
    "categoryId": "cat_sal_rio",
    "createdAt": 1793543409692,
    "updatedAt": 1793543409692
  },
  {
    "id": "tx_seed_943",
    "type": "expense",
    "amount": 96500,
    "date": "2026-01-08",
    "categoryId": "cat_hotel",
    "createdAt": 1793543409693,
    "updatedAt": 1793543409693
  },
  {
    "id": "tx_seed_944",
    "type": "expense",
    "amount": 3600,
    "date": "2026-01-08",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409694,
    "updatedAt": 1793543409694
  },
  {
    "id": "tx_seed_945",
    "type": "expense",
    "amount": 4900,
    "date": "2026-01-08",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409695,
    "updatedAt": 1793543409695
  },
  {
    "id": "tx_seed_946",
    "type": "expense",
    "amount": 79500,
    "date": "2026-01-08",
    "categoryId": "cat_hotel",
    "createdAt": 1793543409696,
    "updatedAt": 1793543409696
  },
  {
    "id": "tx_seed_947",
    "type": "expense",
    "amount": 160000,
    "date": "2026-01-08",
    "categoryId": "cat_viagem",
    "note": "atualização de vôo",
    "createdAt": 1793543409697,
    "updatedAt": 1793543409697
  },
  {
    "id": "tx_seed_948",
    "type": "expense",
    "amount": 4800,
    "date": "2026-01-07",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409698,
    "updatedAt": 1793543409698
  },
  {
    "id": "tx_seed_949",
    "type": "expense",
    "amount": 3200,
    "date": "2026-01-07",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409699,
    "updatedAt": 1793543409699
  },
  {
    "id": "tx_seed_950",
    "type": "expense",
    "amount": 4000,
    "date": "2026-01-07",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409700,
    "updatedAt": 1793543409700
  },
  {
    "id": "tx_seed_951",
    "type": "expense",
    "amount": 40000,
    "date": "2026-01-06",
    "categoryId": "cat_roupa",
    "note": "insider",
    "createdAt": 1793543409701,
    "updatedAt": 1793543409701
  },
  {
    "id": "tx_seed_952",
    "type": "expense",
    "amount": 3100,
    "date": "2026-01-05",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409702,
    "updatedAt": 1793543409702
  },
  {
    "id": "tx_seed_953",
    "type": "expense",
    "amount": 4500,
    "date": "2026-01-05",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409703,
    "updatedAt": 1793543409703
  },
  {
    "id": "tx_seed_954",
    "type": "expense",
    "amount": 4800,
    "date": "2026-01-05",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409704,
    "updatedAt": 1793543409704
  },
  {
    "id": "tx_seed_955",
    "type": "expense",
    "amount": 15800,
    "date": "2026-01-05",
    "categoryId": "cat_viagem",
    "note": "travesseiro",
    "createdAt": 1793543409705,
    "updatedAt": 1793543409705
  },
  {
    "id": "tx_seed_956",
    "type": "expense",
    "amount": 16500,
    "date": "2026-01-04",
    "categoryId": "cat_comida",
    "createdAt": 1793543409706,
    "updatedAt": 1793543409706
  },
  {
    "id": "tx_seed_957",
    "type": "expense",
    "amount": 20000,
    "date": "2026-01-04",
    "categoryId": "cat_carro",
    "createdAt": 1793543409707,
    "updatedAt": 1793543409707
  },
  {
    "id": "tx_seed_958",
    "type": "expense",
    "amount": 6000,
    "date": "2026-01-03",
    "categoryId": "cat_casa",
    "note": "talheres",
    "createdAt": 1793543409708,
    "updatedAt": 1793543409708
  },
  {
    "id": "tx_seed_959",
    "type": "expense",
    "amount": 6600,
    "date": "2026-01-03",
    "categoryId": "cat_alimentos",
    "createdAt": 1793543409709,
    "updatedAt": 1793543409709
  },
  {
    "id": "tx_seed_960",
    "type": "expense",
    "amount": 9300,
    "date": "2026-01-03",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409710,
    "updatedAt": 1793543409710
  },
  {
    "id": "tx_seed_961",
    "type": "expense",
    "amount": 10700,
    "date": "2026-01-02",
    "categoryId": "cat_comida",
    "note": "Almoço",
    "createdAt": 1793543409711,
    "updatedAt": 1793543409711
  },
  {
    "id": "tx_seed_962",
    "type": "expense",
    "amount": 7200,
    "date": "2026-01-02",
    "categoryId": "cat_comida",
    "note": "Jantar",
    "createdAt": 1793543409712,
    "updatedAt": 1793543409712
  },
  {
    "id": "tx_seed_963",
    "type": "expense",
    "amount": 28500,
    "date": "2026-01-02",
    "categoryId": "cat_nova_acr_pole",
    "createdAt": 1793543409713,
    "updatedAt": 1793543409713
  },
  {
    "id": "tx_seed_964",
    "type": "expense",
    "amount": 16200,
    "date": "2026-01-01",
    "categoryId": "cat_comida",
    "createdAt": 1793543409714,
    "updatedAt": 1793543409714
  },
  {
    "id": "tx_seed_965",
    "type": "expense",
    "amount": 245900,
    "date": "2026-01-01",
    "categoryId": "cat_carro",
    "createdAt": 1793543409715,
    "updatedAt": 1793543409715
  }
];
