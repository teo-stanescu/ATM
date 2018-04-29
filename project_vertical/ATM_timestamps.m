clc; clear;

lista = fopen('pointsList.txt','r');
a = fscanf(lista,'%*s %f %f',[2 Inf]);
%a = a';
fclose(lista);

spd = 470; %kts
dist = a(1,:);
%time = 0;
wp = length(dist);
timev = zeros(wp,1);
tv = zeros(wp,3);
sv = zeros(wp,1);
mv = zeros(wp,1);
hv = zeros(wp,1);
for i = 2:wp
    timev(i) = timev(i-1) + dist(i) / spd * 3600; %seconds
    sv(i) = timev(i);
    while (sv(i)>=60);
        mv(i) = mv(i) + 1;
        sv(i) = sv(i) - 60;
    end
    while (mv(i)>=60);
        hv(i) = hv(i) + 1;
        mv(i) = mv(i) - 60;
    end
    tv(i,1) = hv(i);
    tv(i,2) = mv(i);
    tv(i,3) = fix(sv(i));
end
    
% output: vezi in matricea tv
% nu merge ce e mai jos
out = fopen('timestamp.txt','wt+');
fprintf(out,'%6s %12s\n','x','exp(x)');
fprintf(out,'%f %f %f\n',tv);
fclose(out);
    