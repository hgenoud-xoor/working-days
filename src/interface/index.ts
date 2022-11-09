export interface HeadersWorkingDays {
  'X-RapidAPI-Key': string;
  'X-RapidAPI-Host': string;
}

export interface NonWorkingDaysParams {
  country_code: string;
  start_date: string;
  end_date: string;
  configuration?: string;
  profile_id?: string;
}

export interface AnalyseParams extends NonWorkingDaysParams {
  start_time?: string;
  end_time?: string;
}
