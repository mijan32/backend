module.exports = {
  ESIGNET_SERVICE_URL: process.env.ESIGNET_SERVICE_URL ?? "https://esignet.mecstage.mosip.net/v1/esignet",
  PORT: process.env.PORT ?? 8888,
  CLIENT_PRIVATE_KEY: process.env.CLIENT_PRIVATE_KEY ?? 'ewogICAgInAiOiAiRHhuLUdsWVg3MGJFOVdkNW5RTU9ib0piTUJNWHhqODZCUk9XbXJUOVF0NTNBNGJmOUhXOWZrd0VHZ0U2ZWlvaWhzbUthdHctbndFMzd6a0ZBUkpaam1QSjdJdDZmMGYtNHFEM01USjg3T1VjTzhrcU1jU3F6d1pHWExUaFVmSHhtMGVodDVqWE4tNlpHanZzT0JoMHpDUkdNZDctZjA0a3UyNG83WE92bXUxUCIsCiAgICAia3R5IjogIlJTQSIsCiAgICAicSI6ICJET0c0SlBCdEJDc3o5dHFxZDVTMFRpMG1iZXktNER4Ym1YRWpHV2NQejRtUzFPbTVTWkREelBLWHljUWRiQW9yVjF1VW5qYkJ2T0JVZ1lFRjF5OEg5OWJGQ3NJYkFyNXk5b0hmbTgxT2JIemJtcWVBdzdkVW5FS2JONWpHa2FDaE10ckpPQjhTQXBQb2NnN2xiVEttLTRJU0pmSTRoV3R1aF9CMGpwdk51OWZqIiwKICAgICJkIjogIk9hMVdBNzg1N3A4SVFtNi1RUnQ4X3p3Mmx5STJJSlo3a0c1M244Ulo2VVFscUQwdW0tS0wtYTdUMzhKRHpncDVLTU41M0xwWFV2UndNMFBHT3RjVWhHelRVQ3dLT2h0UlA4d1I0ZkVzMVVwb3BfbHlVTFB0azU2TTRrNmR2azd0dGxvU1I3UFROdjVFNmU2QjBBNnNnRzBoNEE5MkpTX25WVlg0bEt1LVFfNFAxVFRjeUtkNVNUNExJNE1IdU5BTXEtU1ljVC15WWhoTGxKM2ZoejJUbGtLYlBCbEgxNEZoeDNvNjNnUXJabzgwZlJXTFJySTBjQWthazJZM1Q3OGdpN3JHWlc5bHdQMlItUFh3bzNUVTltelFLcFp3eUxFZmhLYk1pRUlmZGRDb0FPRDBxMDJURUNXQWxfSlZ3eGFTYkE2eHRfVmczWEJXeWpSTGE3S1FPb1UiLAogICAgImUiOiAiQVFBQiIsCiAgICAidXNlIjogInNpZyIsCiAgICAicWkiOiAibVlRRllXTzBacUFfVVJKQTVkQldnLUR0R1lXdGZVZWZDa3B6S1h3SEJiamIzbWRiUTFINzZOSWxISkpyQ1ZfYy0wTUlLak5Hc0VfTnpUcU5OSDJ3eGlCYjhsMU1heWdiakQwN0ljMFlETDRjVzA5dzA0djlRN0Rubi1xTUdNekpyUEJzZUEyTlNJbm96bW14N3RicWFGR3JRODdwVFlIbTRSeUhfMlNQdkxZIiwKICAgICJkcCI6ICJCMklVMm5sbkFFUGdQWDZXZFk0dC14ZGVUN1cxOU9XcWp4clJrZGVVenFHSEhFRlBzdXZ4ZGhMaUduaXBSMXJjUUh1LVlacEdQMlRRSFBRS24waUNZbHdsTjdIRmRQOFVfV1huRkxWellEcHZRRWVNaW9KMVlfdlVZTFRLU0U3NmFZbHU1aDBpYzZVQ1UxSWluaFpPM0JPTUFndmM3dzZjWk1wcDFoV3VNQmRfIiwKICAgICJhbGciOiAiUlMyNTYiLAogICAgImRxIjogIkNKV09tZ2NpRHNvZmlkdzBCeFl3aFh3dkJNZmtkeGVoendJRzZ0RzBScEFlS2daS3RFeGxQcmxYRDF6Q1lwSHdTZm04Y3laNE9yNmZjZUdpRzhDNnBaMFlsOC04SWpyNTcyMmlybmZGVUNSd1Q0SmFHNUtiTHJwd0p6LUc2OXJJTVZSOURRb2ZmVnBGWjJTbjNQb0pMc2VDQW9tRXd0eFJ2d010R1MtWWpSb1QiLAogICAgIm4iOiAid29pZWJhaEFYc1FiRGRWbTA5a0h2ajlLSUVuMEp6ZGdNNUVSbDJyOURwWFdGVEk0YmJ3elZRY1lhN0ZkN1dhYnNLU3F6UlQ4LVVPNGU2OVdTajZFN1cyU1VjNmdRcTlaTWVfUkxVVDZfSTBuaEM4eUwxUEJpNTJDLTNLMnZ6cHVQTWtwV2xDVzNNMmhwUUhOTkktUGJDVzExMm10ajN6V201eWlacjNWejR3NHBGdmF4WVBOMEcxUWRkQ1lPOHdqRjd4aG5mcEw2cENmSmxJU2dqa2pzSXJFZ18tc19uOXA1b2tONU44R2xaOFQ5OHplYXRURDR1THFMY3Nxd1hJdVlJdXpTTUppUkFxUl9HRnZKYUFkYWczejZ0OU9zVjRpdWx3dng3cXNLLTRRbUdYUmtJeENOcUJqQ04xa3p1YVMwRmtUNzV4S2Z4R0xfeEtOR0c5aXhnMCIKfQ==',
  ESIGNET_AUD_URL: process.env.ESIGNET_AUD_URL ?? "https://esignet.mecstage.mosip.net/v1/esignet/oauth/token",
  CLIENT_ASSERTION_TYPE: process.env.CLIENT_ASSERTION_TYPE ?? "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
  USERINFO_RESPONSE_TYPE: process.env.USERINFO_RESPONSE_TYPE ?? "jwk",
  JWE_USERINFO_PRIVATE_KEY: process.env.JWE_USERINFO_PRIVATE_KEY ?? 'ewogICJwIjogIjJlWDNaVmxMejR1UFJBTE5uQVI3dl91aGJsOWI3OXNfLWpteFcxaTdiMGZaTV9SZHNWT09yWW9uZ05WQWpuVHFSQm1SRXRndXVHM21LMjZnTDdZMVNpb1hXMF8teWxKRDk2QnlUdDRlTlJoY1pZTXFHZnZkaUEyYTlOQnZqZ1phVkNfWWxFYXFSaVNYaFI1SlJ1emgzX1ViUDFKX3BXaHl4R29fX0txWS1XOCIsCiAgImt0eSI6ICJSU0EiLAogICJxIjogInJwM19GS09rbDdfRzNPeUM1MVBNV2w2eG80SEVwaVdfWDN2X3ZoRWc4X2k4ZFpMMlhlVGdHc1BwZGxNUGJKRU5pN0NyUkFpTnlYV0RHMXlnRklvcFU1M1pfdmEyQUlsV1BacW5rcDA3WG9oTTVQc29HQUVDUXVsMWRHOXFYc0ZkNkgwczZVZGYweVlHa05xZzBwVjVJNk5hNzBIazRkandtMlNDUE90Q2pPYyIsCiAgImQiOiAiUWhuY1RYRmhIMksxMVYtMFJDMEJKTUFNYWc4TS1IQWhHdlg0bU5RWWlWQ3RFbkZXOUdNZ1huQlF1bzlfM0pCQ1huT01McFNScTRHeVV1Rmd5SEtnRS1JZHBrM0ZXMnFjY2syVFJHdHBUdXZ0OEwzVG9nSElCNDM5cTJjXzd6UzZSSVltaV9LUUYtcWw1OXRhVHl5UV83Nk9Hb2h2ZkZsZHVFVm5Zc0tBNnVJLUpHVG92VENybDEwY3p3YVBtdGdEOTFoWnV0emRVeUhJZktKb1VCcDNlUzk0U3VEaThDSklOeXpkb2NJYVFjaDVKd3Nidm5RZHJNTV85ZUZXeXVWVk9tc2JiNGQ4WVhmaS01NVhWbndiM3lCSGJNbU5Nd25IRTNlVm56bjkzOFpjeFBleEpld0NHQjVfRm8xYW5PTUlwTm8wV3kxMFMxQ1FkTllXWmZRSlhRIiwKICAiZSI6ICJBUUFCIiwKICAidXNlIjogImVuYyIsCiAgImtpZCI6ICJtajZ0YUhXY1hOOERqSmNoSl8wNk9hNDZERnd5UGpxZGNiSFIzWEdNRmxZIiwKICAicWkiOiAiR01PMWliUlh3ZVVHaEhJRUtXNlFId3pZMEpuaG5ZOURtRS02ekhNbTd4X241cElzSGdYaVVkQ0hCd3RSOU1IM2g5Q29aRlg3b0RfR1pRWXF6MmtvXzhNa0JHQmJ4cFZtcVZlVndLVGN4NG1UNE85MjRTcTlsUTM3WkdZT2dQVmZmbXhOQ1hyZmIydDBxZ1F3TEZPQzRhSjVoRm9EVzlzOHNUTkZpZ19Jei1BIiwKICAiZHAiOiAiWTZYaWZNdlllcUsxTXdJaEsyOTFkSGZMX0tESmQ2aUoycElWeE5PUWJEU3NaVEVrdzlxVmpsRjJfVmtJLTkwRjRYemJ0b1Y4NEVVS0ZPU3podjVKNG9fYlBKd1p4a2JXNUdEUXhiYVlrLWxfSDhGYk9LVFJTODRGQmw1b0ZjaGItTklrdHJLV1hodVAyNFhkTnYxUDBzN1IxaVNSVVlDeHM1ZHZpY291eVNzIiwKICAiYWxnIjogIlJTQS1PQUVQLTI1NiIsCiAgImRxIjogImRlX3dvUmdGeXhpVVVCTE9Oei01X2ktRy0xQmlhWFdGVkJDRUl2T2V0aW1CNEVkcWJ2QnZES1RWd2oxSFphUnk2YTVoZm9ub2VmRU1wQ1pqV0h3WWZZbFgtNFRXV0hacDhTSExuSkxsem10d3hCZC1kUGY1ZHdnSGRLVHJ5eVBfTVUtYVRkVVBPNldyT1pyd2xFcXdqd2wtR2FyXzFDcWFGOXBDdkxLSk9IRSIsCiAgIm4iOiAibEtESlRUNklGMjZITEEtQi1zSkdnaDl2bl9xVXcxaFR5RTZvUVdNZ19paE0wNVp3bUxQOVBRRWdMaGgwckw4VE1uNDhXN3luVmV0T1BGOUdsb1RiZFVndkZMYlRSejA1dlRhNU41eU9SV0VvTkx0Q0c5SFJwNXRfVXFGZnpRZG1SYkJDV1I5cTJhYWZPVTJRa0tvdXBBdlNGM2tjSHhsNjgzRDVPczA0NW01ZFRMTkFpZlJzbVh4TkptVjNXY244T0tjckdQTHFhTHcxbHJJSG9kNVo5TzFDaXAxalBVcXRwd0VaX3lCVkl2VmpFYWN4T0pWV0JrNUI1T1owOXVILW1EV3pnQXFYNkNmZGU5T0xyYlVIY1hIaUt6VHIwemRGN2g2MTgwU3hWOVdUeFluLUp6RHR5a0lhUklYZ3BsWXQ0cEFqUXZzVlA4d1ZmU2EyekFfSEtRIgp9'
};