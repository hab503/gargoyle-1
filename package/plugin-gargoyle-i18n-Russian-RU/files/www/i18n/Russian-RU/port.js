﻿/*
 * UTF-8 (with BOM) Russian-RU text strings for port_forwarding(single,multi).sh html elements
 */

prtS.mPFwding="Переадресация портов";
prtS.PISect="Перенаправление портов";
prtS.PRSect="Перенаправление диапазона портов";
prtS.ForIPort="Индивидуальное перенаправление портов из внешней во внутренюю сеть";
prtS.ForRPort="Перенаправление диапазона портов из внешней во внутренюю сеть";
prtS.DMZ="DMZ (демилитаризованная зона)";
prtS.UseDMZ="Использовать DMZ";
prtS.DMZIP="IP-адрес DMZ";
prtS.UP_NAT="UPnP / NAT-PMP";
prtS.UPNAT_En="Включить UPnP и NAT-PMP сервисы";
prtS.APFor="Активные перенаправления портов";
prtS.USpd="Сообщаемая скорость исходящего соединения";
prtS.DSpd="Сообщаемая скорость входящегоо соединения";
prtS.UPHelp="UPnP (Универсальное Автоматическое Подключение и Настройка) и NAT-PMP (Протокол распределения портов NAT) - протоколы, которые позволяют устройствам и программам в вашей локальной сети автоматически настраивать на маршрутизаторе необходимые им для работы перенаправления портов. Если устройство поддерживает один из этих протоколов, нет необходимости в ручной настройке правил перенаправления портов (выше на этой странице), так как они будут автоматически созданы по запросу устройства.</p><p>При включении данной опции Gargoyle отображает список автоматически созданых перенаправлений, чтобы вы видели, какие устройства запросили перенаправления и убедились в их работоспособности. Сервис может работать некорректно в сети с несколькими маршрутизаторами (множественный NAT). Если в списке есть рядок с '***' - это означает, что не зарегистрировано ни одного автоматического перенаправления.</p><p>Устройство может запросить скорость внешнего подключения, что предусмотрено стандартом. Для настройки ответа на данные запросы предусмотрено две настройки. Приложения могут использовать эту информацию для оптимизации производительности. При этом маршрутизатор никак не ограничивает скорость основываясь на этих настройках. Они используются исключительно для ответа на запрос устройства. Если введено нулевое значение, то в ответ сообщается скорость интерфейса, обычно 100МБ или 1ГБ в зависимости от используемого в маршрутизаторе интерфейса.</p> <p>Существует разные мнения по поводу безопасности этого сервиса и он требует дополнительный объем оперативной памяти для работы, что может быть важно, учитывая ограниченную память маршрутизатора, поэтому по-умолчанию данная функция отключена.";
prtS.NoMiniupnpdErr="Вам необходимо установить дополнительный плагин, чтобы использовать эту опцию!";
prtS.POISect="Открыть отдельный порт";
prtS.OpeIPort="Открыть отдельный порт из внешней во внутреннюю сеть";
prtS.PORSect="Открыть диапазон портов";
prtS.OpeRPort="Открыть диапазон портов порт из внешней во внутреннюю сеть";

//templates
prtS.Desc="Описание";
prtS.optl="(опционально)";
prtS.Proto="Протокол";
prtS.FPrt="Внешний порт";
prtS.TIP="IP-адрес";
prtS.TPrt="Внутренний порт";
prtS.SPrt="Начальный порт";
prtS.EPrt="Конечный порт";

//javascript
prtS.AFRErr="Невозможно добавить правило перенаправления.";
prtS.GTErr="Начальный порт > Конечный порт";
prtS.DupErr="Порт(ы) уже перенаправлен(ы)";
prtS.CopErr="Порт уже перенаправлен";
prtS.UpErr="Невозможно обновить перенаправление порта.";
prtS.Prot="Proto";
prtS.LHst="Внутресетевой хост";
prtS.Port="Порт";
prtS.AORErr="Не получается добавить правило.";
prtS.DupOErr="Порты входящие в этот диапазон уже открыты для этого IP";
prtS.CopOErr="Порт уже открыт для этого IP";
prtS.UpOErr="Не получается обновить открытый порт.";

//edit.sh pages
prtS.PESect="Редактировать перенаправление порта";
prtS.POESect="Редактировать открытый порт";
