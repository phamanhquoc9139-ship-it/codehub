$docx = 'C:\Users\ADMIN\.gemini\antigravity\brain\9168c62b-8394-4661-a83f-694947522547\.user_uploaded\media_1793510051680_a571a4c7.docx'
$zip = 'C:\Users\ADMIN\.gemini\antigravity\scratch\lsdl6_docx.zip'
$dest = 'C:\Users\ADMIN\.gemini\antigravity\scratch\lsdl6_docx'
Copy-Item $docx $zip -Force
if (Test-Path $dest) { Remove-Item -Recurse -Force $dest }
Expand-Archive -Path $zip -DestinationPath $dest -Force
Get-ChildItem -Path "$dest\word\media" | Select-Object Name, Length
